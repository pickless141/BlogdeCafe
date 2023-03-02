// querySelector 
const heading = document.querySelector('h2') // retorna 0 o 1 elemento
console.log(heading)

// querySelectorAll
const enlace = document.querySelectorAll('.navegacion a');



//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A') //Siempre poner en mayusculas la etiqueta 

//Agregar el href
nuevoEnlace.href = 'nuevo.enlace.html'
//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)


//Eventos

//window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML esten listos
//
//})
//window.onload = function () {
//
//}

//document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes
//
//})

//window.onscroll = function() {
//    console.log('scrolling...')
//}


//Seleccionar elementos y asociarles un evento - Este se utiliza mas en imagenes, textos etc
//const btnEnviar = document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', function(e) {
//    console.log(e)
//    evento.preventDefault() //se usa en todos los formularios
//
//   //Validar un formulario
//
//
//    console.log('enviando formulario')
//})

//Eventos de los Inputs y textareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')
nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)
//Evento Submit - Se usa mas para formularios
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    //Validar Formulario
    const {nombre, email, mensaje} = datos
    if(nombre === '' || email === '' || mensaje === '' ) {
        mostrarAlerta('Todos los campos son obligatorios', 'error')

        return;
    }

    // crear la alerta de Enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente')

    console.log('Enviando Formulario')
})

function leerTexto(e) {
    //console.log(e.target.value)
    
    datos[e.target.id] = e.target.value;
    
    //console.log(datos)
}
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error')
    }else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta)

    //Para que desaparezca la alerta
    setTimeout (() => {
        alerta.remove();
    }, 5000)

}

