
import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci(n)', () => {

    describe('Casos válidos', () => {

        it('debe devolver 0 para el índice 0', () => {
            expect(fibonacci(0)).toBe(0);
        });

        it('debe devolver 1 para el índice 1', () => {
            expect(fibonacci(1)).toBe(1);
        });

        it('debe devolver 1 para el índice 2', () => {
            expect(fibonacci(2)).toBe(1);
        });

        it('debe calcular correctamente el índice 5', () => {
            expect(fibonacci(5)).toBe(5);
        });

        it('debe calcular correctamente el índice 10', () => {
            expect(fibonacci(10)).toBe(55);
        });

        it('debe calcular correctamente el índice 78', () => {
            expect(fibonacci(78)).toBe(8944394323791464);
        });

    });

    describe('Casos inválidos', () => {

        it.each([
            -1,
            79,
            2.5,
            NaN,
            Infinity,
            -Infinity,
            '5',
            null,
            undefined,
            true,
            {},
            []
        ])('debe lanzar RangeError para la entrada %s', (entrada) => {
            expect(() => fibonacci(entrada)).toThrow(
                new RangeError('solo números enteros entre 0 y 78')
            );
        });

    });

});
