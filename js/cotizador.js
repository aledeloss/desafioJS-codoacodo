////FUNCIÓN CALCULAR////

document.querySelector('#calcular').addEventListener('click', calcular);

function calcular() {

    class Pase {
        constructor(nombre, precio, cantidad) {
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
            this.total = this.precio * this.cantidad;
        }
    }

    let cantPDia = document.querySelector('#pase_dia').value;
    let cantPComp = document.querySelector('#pase_completo').value;
    let cantPDosDias = document.querySelector('#pase_dosdias').value;
    let cantCamisa = document.querySelector('#camisa_evento').value;
    let cantEtiqueta = document.querySelector('#etiquetas').value;

    let productos = [
        PasexDia = new Pase('BOLETOS PASE POR DÍA', 30, cantPDia),
        PaseCompleto = new Pase('BOLETOS PASE COMPLETO', 50, cantPComp),
        PasePdosDias = new Pase('BOLETOS PASE POR DOS DÍAS', 45, cantPDosDias),
        Camisa = new Pase('CAMISA DEL EVENTO', 10, cantCamisa),
        Etiqueta = new Pase('PAQUETE DE ETIQUETAS', 2, cantEtiqueta)
    ];

    let resumen = document.querySelector('#lista-productos');


    totalFinal = 0;

    let lista = document.createElement('ul'); // crea la lista donde se van a ingresar los detalles
    for (i = 0; i < productos.length; i++) { //itera en la lista de productos

        if (productos[i].cantidad > 0) { //actúa solo si hay algún valor, es decir si se compra el producto            
            //por cada item
            totalFinal += productos[i].total; //suma el valor del producto al total.

            let item = document.createElement('li'); //crea el li
            let itemContent = document.createTextNode(
                `${productos[i].cantidad} ${productos[i].nombre}: \$${productos[i].total}`); //crea el texto
            item.appendChild(itemContent); //se agrega el texto al li 
            lista.appendChild(item); // se agrega el item a la lista.
        }
        resumen.replaceChild(lista, resumen.firstChild); // se agrega la lista el resumen

    };
    console.log(totalFinal)
    document.querySelector('#suma-total').innerHTML = totalFinal;
};


//// FUNCIÓN PAGAR ////

// document.querySelector('#btnRegistro').addEventListener('click', pagar);
// let nombre = document.querySelector('#nombre').value;
// let apellido = document.querySelector('#apellido').value;
// let email = document.querySelector('#email').value;
// let regalo = document.querySelector('#regalo').value;

// function pagar(){
//     console.log('Datos personales:');
//     console.log(nombre + apellido);
//     console.log('Carrito:');
//     console.log(lista);
//     console.log('Regalo:');
//     console.log(regalo);
//     // SI NO ELIGIÓ REGALO ALERT REGALO.
//     // SI NO CARGÓ LOS DATOS ALERT DATOS.
//     // ALERT SE REGISTRARON LOS DATOS DE LA COMPRA EN LA CONSOLA
//     // CONSOLE LOG DATOS.

// }