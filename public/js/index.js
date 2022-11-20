window.addEventListener('load', (e) => {
    // cree las variables para capturar los selectores
let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelector('p');
let body = document.querySelector('body');
//--------------------------------------------------------------------------
/* cambie el estilo del h2 y cree un if para si viene nombre 
ponerle el nombre del usuario si no el de invitado */
h2.style.textTransform = "uppercase"
/*let nombre = prompt("Ingrese su nombre")
if(nombre){
h2.innerHTML += "<h2>" + "Bienvenido " + nombre + " </h2>"
} else if (nombre === null){
    h2.innerHTML += "<h2>" + "Bienvenido " + "invitado" + " </h2>"
} else {
    h2.innerHTML += "<h2>" + "Bienvenido " + "invitado" + " </h2>"
}*/

//--------------------------------------------------------------------------
// cambie el color de a
a.style.color = "#E51B3E"
//--------------------------------------------------------------------------
let parrafos = document.querySelectorAll('p');
parrafos.forEach((parrafo, i) => {
    if ((i + 1) % 2 === 0) {
        parrafo.classList.add("destacadoPar")
    }else{
        parrafo.classList.add("destacadoImpar")
    }
})
//--------------------------------------------------------------------------
/* cree la variable bodyFondo le aniado un confirm y un if 
para preguntar si es verdadero y aniado una clase al body */
let bodyFondo = confirm('¿Desea colocar un fondo de pantalla?');
if(bodyFondo){
    body.classList.add('fondo')
}
//---------------------------------------------------------------------------
// capturo la clase container y le cambio el display none por block
let container = document.querySelector('.container');
container.style.display = "block";
//---------------------------------------------------------------------------
console.log('HOLAAAAA')
})