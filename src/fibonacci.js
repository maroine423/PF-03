export function fibonacci(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0 || n > 78) {
        throw new RangeError("solo números enteros entre 0 y 78");
    }

    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let a = 0, b = 1, temp = 0;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}