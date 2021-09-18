
   
function Producto(nombre, madera, medidas, precio) {
    this.nombre = nombre;
    this.madera = madera;
    this.medidas = medidas;
    this.precio = precio;
    
 }
 const mesaAqua = new Producto("Mesa Aqua", "Algarrobo", "180cms x 100cms x 70cms", 40000);
 const mesaTerra = new Producto("Mesa Terra", "Pino", "210cms x 110cms x 70cms", 45000);
 const sillaBora = new Producto("Silla Bora", "Cedro", "60cms x 50cms x 70cms", 5000);
 const sillaBonet = new Producto("Silla Bonet", "Algarrobo" , "60cms x 60cms x 70cms", 7500);
 const arrayProductos = [mesaTerra,mesaAqua,sillaBonet,sillaBora]
 

 const productoElegido = prompt ("Hola, en este momento tenemos stock en: \n- MESA\n- SILLA\n¿Que producto le interesa?")
 const propiedades = ("el producto seleccionado cuenta con las siguientes características:")
 const compra = ("para continuar con la compra por favor contactarse con el 2477-351607")
 const gracias = ("Gracias por visitarnos, ¡vuelva pronto!")

 if (productoElegido == "mesa") {
     const modeloMesa = prompt ("contamos con dos modelos:\n- AQUA\n- TERRA\n¿Que modelo le interesa?")
     if (modeloMesa == "aqua") {
    console.log(propiedades)
    console.log(mesaAqua)
    console.log(compra)
    }else if (modeloMesa == "terra"){
    console.log(propiedades)
    console.log(mesaTerra)
    console.log(compra)
    }else{
        console.log(gracias)
    }

}else if (productoElegido == "silla") {
    const modeloSilla = prompt ("contamos con dos modelos:\n- BORA\n- BONET\n¿Que modelo le interesa?")
    if (modeloSilla == "bora") {
   console.log(propiedades)
   console.log(sillaBora)
   console.log(compra)
   }else if (modeloSilla == "bonet"){
   console.log(propiedades)
   console.log(sillaBonet)
   console.log(compra)
   }else{
       console.log(gracias)
   }
}else{
    alert(gracias)
}


