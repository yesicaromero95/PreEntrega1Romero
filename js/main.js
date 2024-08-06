class producto {
    constructor(id, nombre, foto, precio, stock){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.precio = precio
        this.stock = stock
    }
}

let listaProductos = [
    new producto(1, "Tronco de brasil", "https://content.elmueble.com/medio/2022/11/10/planta-de-interior-tronco-de-brasil_057150cf_221110101018_1000x1000.jpg", 15000, 10),
    new producto(2, "Potus","https://www.torontobulkflowers.com/wp-content/uploads/2019/06/hanging_golden_pothos_plants-400x400.jpg",3000,12),
    new producto(3, "Lazo de amor","https://i.pinimg.com/originals/63/10/94/631094bae471a507f5211aced844089c.jpg",3500,8),
    new producto(4,"Aloe vera","https://cashpo-design.ru/userfiles/blog/kislorod5.jpg",3000,15),
    new producto(5,"Monstera","https://mygreenleaf.ae/wp-content/uploads/2024/01/Monstera-Deliciosa.jpg",5000,10),
    new producto(6,"Palmera de salon","https://www.123planten.nl/media/catalog/product/cache/0dbc0221ed888f9845a12612000d41ec/g/r/grote_areca_kamerplant_palm.jpg",6500,15),
 ]

 localStorage.setItem("productos",JSON.stringify(listaProductos))
//Agrego mi lista de productos al html con DOM
 const divProductos = document.getElementById("productos")

 listaProductos.forEach((e)=>{
     divProductos.innerHTML +=`
     <div id= "${e.id}">
        <p>${e.nombre}</p>
        <img src=${e.foto}>
        <p>${e.precio}</p>
        <button id= "btn${e.id}"> Comprar </button>
    </div>
     `
 })

 //Agrego evento al boton de comprar
 let boton = document.querySelector("button")
 boton.addEventListener("click", ()=>{
    console.log("le diste clik");
 })
 //Paso de objeto a texto
let productosString = JSON.stringify(listaProductos)

//Modo oscuro

let boton_modo = document.querySelector("button")
let body = document.body

let modoUsuario = localStorage.getItem("modo")
body.className = modoUsuario

boton_modo.addEventListener('click',()=> {
    if (body.className == 'light-mode'){
        body.className = 'dark-mode'
    } else {
        body.className = 'light-mode'
    }


    localStorage.setItem("modo",body.className)
})
