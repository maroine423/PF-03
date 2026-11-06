import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('Función fibonacci(n)', () => {  it('debe devolver 0 para n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('debe devolver 1 para n = 1 y n = 2', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
  });

  it('debe calcular correctamente términos intermedios (5 y 10)', () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });

  it('debe calcular correctamente el límite superior (78)', () => {
    expect(fibonacci(78)).toBe(8944394323791464);
  });

  it('debe lanzar RangeError para entradas inválidas (negativos, >78, decimales, NaN, Infinity, tipos incorrectos)', () => {
    const invalidInputs = [-1, 79, 2.5, NaN, Infinity, -Infinity, "5", null, undefined, true, {}];
    
    invalidInputs.forEach((input) => {
      expect(() => fibonacci(input)).toThrowError(RangeError);
      expect(() => fibonacci(input)).toThrowError("solo números enteros entre 0 y 78");
    });
  });
});