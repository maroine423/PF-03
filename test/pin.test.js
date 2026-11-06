
import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido(pin)', () => {
  describe('Casos válidos', () => {
    it('debe aceptar un PIN de 4 dígitos', () => {
      expect(esPinValido('1234')).toBe(true);
    });

    it('debe aceptar un PIN de 6 dígitos', () => {
      expect(esPinValido('123456')).toBe(true);
    });

    it('debe aceptar ceros iniciales', () => {
      expect(esPinValido('0123')).toBe(true);
    });

    it('debe aceptar ceros cuando no todos son iguales', () => {
      expect(esPinValido('000001')).toBe(true);
    });
  });

  describe('Casos inválidos', () => {
    it.each([
      '', '123', '12345', '1234567'
    ])('debe rechazar longitudes incorrectas: "%s"', (pin) => {
      expect(esPinValido(pin)).toBe(false);
    });

    it.each([
      '1111', '888888', '0000', '999999'
    ])('debe rechazar PIN con todos los dígitos iguales: "%s"', (pin) => {
      expect(esPinValido(pin)).toBe(false);
    });

    it.each([
      '12a4', '12A4', '12 34', ' 1234',
      '1234 ', '12-34', '１２３４'
    ])('debe rechazar caracteres no permitidos: "%s"', (pin) => {
      expect(esPinValido(pin)).toBe(false);
    });

    it.each([
      null, undefined, 1234, true, false, {},
      [], ['1', '2', '3', '4']
    ])('debe rechazar tipos incorrectos: %s', (pin) => {
      expect(esPinValido(pin)).toBe(false);
    });
  });
});
