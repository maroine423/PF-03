
export function esPinValido(pin) {
  if (typeof pin !== 'string') {
    return false;
  }

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  if (!/^[0-9]+$/.test(pin)) {
    return false;
  }

  if (/^([0-9])\1+$/.test(pin)) {
    return false;
  }

  return true;
}
