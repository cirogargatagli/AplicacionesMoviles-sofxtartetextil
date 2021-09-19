const patternLetters = new RegExp('^[A-Z]+$', 'i');
const patterDate = new RegExp('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const fecha = document.getElementById('fechaNac');

nombre.addEventListener('blur', function(event) {
    let errorNombre = document.getElementById('error-nombre');
    let nombreRequerido = document.getElementById('nombre-requerido');
    if(nombre.value === ''){
        nombreRequerido.classList.remove('ocultar-error');
        errorNombre.classList.add('ocultar-error');
    } else if(!patternLetters.test(nombre.value)){
        errorNombre.classList.remove('ocultar-error');
        nombreRequerido.classList.add('ocultar-error');
    } else {
        errorNombre.classList.add('ocultar-error');
        nombreRequerido.classList.add('ocultar-error');
    }
});

apellido.addEventListener('blur', function(event) {
    let errorApellido = document.getElementById('error-apellido');
    let apellidoRequerido = document.getElementById('apellido-requerido');
    if(apellido.value === ''){
        apellidoRequerido.classList.remove('ocultar-error');
        errorApellido.classList.add('ocultar-error');
    } else if (!patternLetters.test(apellido.value)){
        errorApellido.classList.remove('ocultar-error');
        apellidoRequerido.classList.add('ocultar-error');
    } else {
        errorApellido.classList.add('ocultar-error');
        apellidoRequerido.classList.add('ocultar-error');
    }
});

fecha.addEventListener('blur', function(event) {
    let errorFecha = document.getElementById('error-fecha');
    let errorRequerido = document.getElementById('fecha-requerida');
    if(fecha.value === ''){
        errorRequerido.classList.remove('ocultar-error');
        errorFecha.classList.add('ocultar-error');
    } else if(!patterDate.test(fecha.value)){
        errorFecha.classList.remove('ocultar-error');
        errorRequerido.classList.add('ocultar-error');
    } else {
        errorFecha.classList.add('ocultar-error');
        errorRequerido.classList.add('ocultar-error')
    }
});
