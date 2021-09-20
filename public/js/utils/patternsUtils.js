export const patternLetters = new RegExp('^[A-Z]+$', 'i');
export const patternDate = new RegExp('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$');
export const patternEmail = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]{2,}$");