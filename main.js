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

