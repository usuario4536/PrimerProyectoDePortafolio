alert("hello world!!!!")
let unPullDePrueba = prompt("Esto sera enviado al local :)")
console.log(unPullDePrueba)

let body = document.getElementById("presentacion")
let boton = document.getElementById("boton")

boton.addEventListener("click", funcion)

function funcion(){
    return document.getElementById("presentacion").style.display = "none";
}

