let nombreIngresado = prompt("Ingresar nombre")
alert ("Hola "+ nombreIngresado + ", Bienvenido/a")

function valoresProductos(producto1, producto2) {
  return producto1 + producto2;
}

function valorTotal() {
  let producto1 = parseInt(prompt("Ingresa el valor del primer producto, por favor"))
  let producto2 = parseInt(prompt("Ingresa el valor del segundo producto"))
  let resultado = alert("El valor total de sus productos ingresados es de: " + valoresProductos(producto1, producto2))
  if (isNaN(producto1) || isNaN(producto2)) {
    alert ("No se pudo generar la operaciòn");
  } else {
    alert ("Operaciòn finalizada")
  }

  let listaProductos = parseInt(prompt("Ingrese la cantidad de productos"));

for (let i = 1; i <= listaProductos; i++) {
  let producto = prompt("Ingrese el nombre del producto");
   console.log(`${i}: ${producto}`);
  }
}

valorTotal();

const productos = [
  {id:"1", 
   nombre:"menta", 
   precio:1900, 
   stock: 10},
   {id:"2", 
    nombre:"potus", 
    precio:3000, 
    stock: 12},
    {id:"3", 
      nombre:"lazo de amor", 
      precio:2000, 
      stock: 8},
]
console.log (productos);

productos.push({id:"4", 
  nombre:"aloe vera", 
  precio:1000, 
  stock: 15})

 console.log (productos);

  alert ("Lista de productos: \n menta \n potus \n lazo de amor \n aloe vera");
  let buscarProducto = prompt("Escriba algùn producto de la lista para saber sus datos")
 const busqueda = productos.find((el) => el.nombre === buscarProducto)
 console.log(busqueda);
 const filtrarProducto = productos.filter((el) => el.precio < 2000)
 console.log(filtrarProducto);



