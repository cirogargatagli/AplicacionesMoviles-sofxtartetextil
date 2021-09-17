const pattern = new RegExp('^[A-Z]+$', 'i');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');

nombre.addEventListener('blur', function(event) {
    let errorNombre = document.getElementById('error-nombre');
    let nombreRequerido = document.getElementById('nombre-requerido');
    if(nombre.value === ''){
        nombreRequerido.classList.remove('ocultar-error');
        errorNombre.classList.add('ocultar-error');
    } else if(!pattern.test(nombre.value)){
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
    } else if(!pattern.test(apellido.value)){
        errorApellido.classList.remove('ocultar-error');
        apellidoRequerido.classList.add('ocultar-error');
    } else {
        errorApellido.classList.add('ocultar-error');
        apellidoRequerido.classList.add('ocultar-error');
    }
});