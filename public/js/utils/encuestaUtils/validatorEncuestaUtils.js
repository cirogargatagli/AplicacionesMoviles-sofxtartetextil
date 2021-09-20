import { nombre, apellido, fecha, sexo, email, valoracion } from './elementsEncuestaUtils.js'
import { patternLetters, patternDate, patternEmail } from '../patternsUtils.js'

export const nombreValido = () => {
    return nombre.value != '' && patternLetters.test(nombre.value);
}

export const apellidoValido = () => {
    return apellido.value != '' && patternLetters.test(apellido.value);
}

export const fechaValida = () => {
    return fecha.value != '' && patternDate.test(fecha.value)
}

export const sexoValido = () => {
    return sexo.value != 'Sexo';
}

export const emailValido = () => {
    return email.value != '' && patternEmail.test(email.value)
}

export const valoracionValida = () => {
    return valoracion.value != 'Valoracion';
}