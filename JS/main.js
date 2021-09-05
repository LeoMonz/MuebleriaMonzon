/*Desafío entregable*/

const producto = prompt ("hola, por el momento solo tenemos sillas. ¿le interesa comprar el producto? ")
const saludo = "gracias por su compra"
const precioSilla = 5000
const multiplicacion = (a,b) => a * b;

       


        if (producto !="no" ){

            const cantidad = prompt ("perfecto, ¿cuantas va a necesitar?")
            if (cantidad > 1){
                alert("muy bien, usted deberá abonar" +" "+ multiplicacion(precioSilla,cantidad))
                alert(saludo)
                producto =""
              
            } else {
                alert("lo lamentamos, usted ingresó un valor incorrecto")
                producto = ""
            }
            
        }else {
            alert("lamentamos no poder ayudarlo.")

        }
        


