document.addEventListener("DOMContentLoaded",() =>{

    console.log("El documento se ha cargado");
});


let mensajeInicio = document.getElementById('mensajeInicio')
mensajeInicio.addEventListener('click', function() {
    alert('Has hecho click');
});

let mensajeContacto = document.getElementById('mensajeContacto')
mensajeContacto.addEventListener('click', function(){
    alert('Hablemos');
});


