const patternLetters = new RegExp('^[A-Z]+$', 'i');
const patternDate = new RegExp('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$');
const patternEmail = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$');

const nombre = document.getElementById('nombre');
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

const apellido = document.getElementById('apellido');
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

const fecha = document.getElementById('fechaNac');
fecha.addEventListener('blur', function(event) {
    let errorFecha = document.getElementById('error-fecha');
    let fechaRequerida = document.getElementById('fecha-requerida');
    if(fecha.value === ''){
        fechaRequerida.classList.remove('ocultar-error');
        errorFecha.classList.add('ocultar-error');
    } else if(!patternDate.test(fecha.value)){
        errorFecha.classList.remove('ocultar-error');
        fechaRequerida.classList.add('ocultar-error');
    } else {
        errorFecha.classList.add('ocultar-error');
        fechaRequerida.classList.add('ocultar-error')
    }
});

const sexo = document.getElementById('sexo');
sexo.addEventListener('blur', function(event) {
    let sexoRequerido = document.getElementById('sexo-requerido');
    if(sexo.value === 'Sexo'){
        sexoRequerido.classList.remove('ocultar-error');
    } else {
        sexoRequerido.classList.add('ocultar-error');
    }
});

const email = document.getElementById('email');
email.addEventListener('blur', function(event) {
    let errorEmail = document.getElementById('error-email');
    let emailRequerido = document.getElementById('email-requerido');
    if(email.value === ''){
        emailRequerido.classList.remove('ocultar-error');
        errorEmail.classList.add('ocultar-error');
    } else if(!patternEmail.test(email.value)){
        errorEmail.classList.remove('ocultar-error');
        emailRequerido.classList.add('ocultar-error');
    } else {
        errorEmail.classList.add('ocultar-error');
        emailRequerido.classList.add('ocultar-error');
    }
});

const valoracion = document.getElementById('valoracion');
valoracion.addEventListener('blur', function(event) {
    let valoracionRequerido = document.getElementById('valoracion-requerida');
    if(valoracion.value === 'Valoracion'){
        valoracionRequerido.classList.remove('ocultar-error');
    } else {
        valoracionRequerido.classList.add('ocultar-error');
    }
});

const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', function(event) {
    nombre.value = '';
    apellido.value = '';
    fecha.value = ''
    sexo.value = 'Sexo';
    email.value = '';
    valoracion.value = 'Valoracion';
    event.preventDefault();
});

const cancelar = document.getElementById('cancelar');
cancelar.addEventListener('click', function(event) {
    let respuesta = confirm('¿Desea volver a la página anterior?');
    if (respuesta) {
        history.back();
    } else {
        return;
    }
});

const formulario = document.getElementById('formulario');
formulario.addEventListener('click', function(event) {
    let values = nombre.value + '\n' + apellido.value + '\n' + 
        fecha.value + '\n' + sexo.value + '\n' + 
        email.value + '\n' + valoracion.value;
    alert(values);
    event.preventDefault();
});