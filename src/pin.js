export function esPinValido(pin) {
    if (typeof pin !== 'string') {
        return false;
    }

    const regex = /^([0-9]{4}|[0-9]{6})$/;
    if (!regex.test(pin)) {
        return false;
    }

    const todosIguales = pin.split('').every(digito => digito === pin[0]);
    if (todosIguales) {
        return false;
    }

    return true;
}