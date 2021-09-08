// Desafío Array con objetos + Primer entrega de proyecto final //


class Producto {
    constructor(nombre, madera, medidas, precio) {
        this.nombre = nombre;
        this.madera = madera;
        this.medidas = medidas;
        this.precio = parseFloat(precio);
    }
    ahora12() {
        return this.precio / 12;
    }
    descuentoEfectivo() {
        return this.precio * 0.90;
    }
    
}

const arrayProductos = [];
arrayProductos.push(new Producto("Mesa Aqua", "Algarrobo", "180cms x 100cms x 70cms", 54000));
arrayProductos.push(new Producto("Mesa Terra", "Pino", "210cms x 110cms x 70cms", 45000));
arrayProductos.push(new Producto("Silla Bora", "Cedro", "60cms x 50cms x 70cms", 9000));
arrayProductos.push(new Producto("Silla Bonet", "Algarrobo" , "60cms x 60cms x 70cms", 7500));

console.log(arrayProductos)

for (const producto of arrayProductos) {
    console.log("Con la promoción AHORA12 el valor de la cuota sería de $" + producto.ahora12())
}

for (const producto of arrayProductos) {
    console.log("Si el pago es en efectivo se le aplicará un 10% de descuento, quedando un precio final de $" + producto.descuentoEfectivo())
}



 

// Segunda opción Array con objetos //


// function Producto(nombre, madera, medidas, precio) {
//     this.nombre = nombre;
//     this.madera = madera;
//     this.medidas = medidas;
//     this.precio = precio;
    
// }
// const mesaAqua = new Producto("Mesa Aqua", "Algarrobo", "180cms x 100cms x 70cms", 40000);
// const mesaTerra = new Producto("Mesa Terra", "Pino", "210cms x 110cms x 70cms", 45000);
// const sillaBora = new Producto("Silla Bora", "Cedro", "60cms x 50cms x 70cms", 5000);
// const sillaBonet = new Producto("Silla Bonet", "Algarrobo" , "60cms x 60cms x 70cms", 7500);


// console.log(mesaAqua)
// console.log(mesaTerra)
// console.log(sillaBora)
// console.log(sillaBonet)

// const arrayProductos = [mesaTerra,mesaAqua,sillaBonet,sillaBora]
// console.log(arrayProductos)














// /*Desafío entregable*/

// const producto = prompt ("hola, por el momento solo tenemos sillas. ¿le interesa comprar el producto? ")
// const saludo = "gracias por su compra"
// const precioSilla = 5000
// const multiplicacion = (a,b) => a * b;

       


//         if (producto !="no" ){

//             const cantidad = prompt ("perfecto, ¿cuantas va a necesitar?")
//             if (cantidad > 1){
//                 alert("muy bien, usted deberá abonar" +" "+ multiplicacion(precioSilla,cantidad))
//                 alert(saludo)
//                 producto =""
              
//             } else {
//                 alert("lo lamentamos, usted ingresó un valor incorrecto")
//                 producto = ""
//             }
            
//         }else {
//             alert("lamentamos no poder ayudarlo.")

//         }
        


