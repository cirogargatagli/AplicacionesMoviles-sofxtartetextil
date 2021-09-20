import { nombre, apellido, fecha, sexo, email, valoracion, arrayEncuesta, limpiar, cancelar, enviar, formulario } from './utils/encuestaUtils/elementsEncuestaUtils.js'
import { patternLetters, patternDate, patternEmail } from './utils/patternsUtils.js'
import { nombreValido, apellidoValido, fechaValida, sexoValido, emailValido, valoracionValida } from './utils/encuestaUtils/validatorEncuestaUtils.js'

var inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    });
})

//Activar boton Enviar si todos los campos son válidos
arrayEncuesta.forEach(input => {
    input.addEventListener("change", e => {
        if (
            nombreValido() &&
            apellidoValido() &&
            fechaValida() &&
            sexoValido() &&
            emailValido() &&
            valoracionValida()
        ) {
            enviar.disabled = false;
        }
        else {
            enviar.disabled = true;
        }
    })
})

nombre.addEventListener('blur', function (event) {
    let errorNombre = document.getElementById('error-nombre');
    let nombreRequerido = document.getElementById('nombre-requerido');
    if (nombre.value === '') {
        nombreRequerido.classList.remove('ocultar-error');
        errorNombre.classList.add('ocultar-error');
    } else if (!patternLetters.test(nombre.value)) {
        errorNombre.classList.remove('ocultar-error');
        nombreRequerido.classList.add('ocultar-error');
    } else {
        errorNombre.classList.add('ocultar-error');
        nombreRequerido.classList.add('ocultar-error');
    }
});


apellido.addEventListener('blur', function (event) {
    let errorApellido = document.getElementById('error-apellido');
    let apellidoRequerido = document.getElementById('apellido-requerido');
    if (apellido.value === '') {
        apellidoRequerido.classList.remove('ocultar-error');
        errorApellido.classList.add('ocultar-error');
    } else if (!patternLetters.test(apellido.value)) {
        errorApellido.classList.remove('ocultar-error');
        apellidoRequerido.classList.add('ocultar-error');
    } else {
        errorApellido.classList.add('ocultar-error');
        apellidoRequerido.classList.add('ocultar-error');
    }
});


fecha.addEventListener('blur', function (event) {
    let errorFecha = document.getElementById('error-fecha');
    let fechaRequerida = document.getElementById('fecha-requerida');
    if (fecha.value === '') {
        fechaRequerida.classList.remove('ocultar-error');
        errorFecha.classList.add('ocultar-error');
    } else if (!patternDate.test(fecha.value)) {
        errorFecha.classList.remove('ocultar-error');
        fechaRequerida.classList.add('ocultar-error');
    } else {
        errorFecha.classList.add('ocultar-error');
        fechaRequerida.classList.add('ocultar-error')
    }
});

sexo.addEventListener('blur', function (event) {
    let sexoRequerido = document.getElementById('sexo-requerido');
    if (sexo.value === 'Sexo') {
        sexoRequerido.classList.remove('ocultar-error');
    } else {
        sexoRequerido.classList.add('ocultar-error');
    }
});

email.addEventListener('blur', function (event) {
    let errorEmail = document.getElementById('error-email');
    let emailRequerido = document.getElementById('email-requerido');
    if (email.value === '') {
        emailRequerido.classList.remove('ocultar-error');
        errorEmail.classList.add('ocultar-error');
    } else if (!patternEmail.test(email.value)) {
        errorEmail.classList.remove('ocultar-error');
        emailRequerido.classList.add('ocultar-error');
    } else {
        errorEmail.classList.add('ocultar-error');
        emailRequerido.classList.add('ocultar-error');
    }
});

valoracion.addEventListener('blur', function (event) {
    let valoracionRequerido = document.getElementById('valoracion-requerida');
    if (valoracion.value === 'Valoracion') {
        valoracionRequerido.classList.remove('ocultar-error');
    } else {
        valoracionRequerido.classList.add('ocultar-error');
    }
});

limpiar.addEventListener('click', function (event) {
    event.preventDefault();
    nombre.value = '';
    apellido.value = '';
    fecha.value = ''
    sexo.value = 'Sexo';
    email.value = '';
    valoracion.value = 'Valoracion';
});


cancelar.addEventListener('click', function (event) {
    event.preventDefault();
    let respuesta = confirm('¿Desea volver a la página anterior?');
    if (respuesta) {
        history.back();
    } else {
        return;
    }
});


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (
        nombreValido() &&
        apellidoValido() &&
        fechaValida() &&
        sexoValido() &&
        emailValido() &&
        valoracionValida()
    ) {
        let values = nombre.value + '\n' + apellido.value + '\n' +
            fecha.value + '\n' + sexo.value + '\n' +
            email.value + '\n' + valoracion.value;
        alert(values);
    }
    else {
        alert("Se deben completar todos los campos correctamente");
    }
});