let nombreIngresado = prompt("Ingresar nombre")
alert ("Hola"+ " " + nombreIngresado + ", Bienvenido/a")

function valoresProductos(producto1, producto2) {
  return producto1 + producto2;
}

function valorTotal() {
  let producto1 = parseInt(prompt("Ingresa el valor del primer producto, por favor"))
  let producto2 = parseInt(prompt("Ingresa el valor del segundo producto"))
  let resultado = parseInt (alert("El valor total de sus productos ingresados es de:"+ " " + valoresProductos(producto1, producto2)))
  if (isNaN(producto1) || isNaN(producto2)) {
    alert ("No se pudo generar la operaciòn");
  } else {
    alert ("Operaciòn finalizada")
  }

  let listaProductos = parseInt(prompt("Ingrese la cantidad de productos"));

for (let i = 1; i <= listaProductos; i++) {
  let producto = prompt("Ingrese el nombre del producto");
   console.log("${i}: ${producto}");
  }
}

valorTotal();
