alert("hello world!!!!")
let unPullDePrueba = prompt("Esto sera enviado al local :)")
console.log(unPullDePrueba)

let body = document.getElementById("presentacion")
let boton = document.getElementById("boton")
let boton2 = document.getElementById("boton2")

boton.addEventListener("click", funcion)
boton2.addEventListener("click", funcion2)

function funcion(){
    return document.getElementById("presentacion").style.display = "none";
}
function funcion2(){
    return document.getElementById("sobreMi").style.display = "none";
}
console.log("intento decomunicacion")
console.log("servidor activo??")

console.log("recibido")
console.log("servidor operando")
console.log("12" + "3")

function funcion2(){
    console.log("hello world")
}

//let intervalo = 0
//intervalo = setInterval(funcion2, 500)

