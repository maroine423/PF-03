import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('Función esPinValido(pin)', () => {
  it('debe retornar true para pines válidos de 4 o 6 dígitos sin ser todos iguales', () => {
    expect(esPinValido("0123")).toBe(true);
    expect(esPinValido("1234")).toBe(true);
    expect(esPinValido("000001")).toBe(true);
  });

  it('debe retornar false para longitudes incorrectas o cadena vacía', () => {
    expect(esPinValido("")).toBe(false);
    expect(esPinValido("123")).toBe(false);
    expect(esPinValido("12345")).toBe(false);
    expect(esPinValido("1234567")).toBe(false);
  });

  it('debe retornar false si todos los dígitos son iguales', () => {
    expect(esPinValido("1111")).toBe(false);
    expect(esPinValido("888888")).toBe(false);
  });

  it('debe retornar false para caracteres no permitidos (letras, espacios, signos)', () => {
    expect(esPinValido("12a4")).toBe(false);
    expect(esPinValido(" 1234")).toBe(false);
    expect(esPinValido("12 34")).toBe(false);
  });

  it('debe retornar false para tipos incorrectos (null, undefined, números, booleanos, arrays)', () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
    expect(esPinValido(1234)).toBe(false);
    expect(esPinValido(true)).toBe(false);
    expect(esPinValido(["1", "2", "3", "4"])).toBe(false);
  });
});