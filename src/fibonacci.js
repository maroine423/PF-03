export function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0 || n > 78) {
        throw new RangeError("solo números enteros entre 0 y 78");
    }
    let anterior = 0;
    let actual = 1;
    for (let i = 0; i < n; i++) {
        [anterior, actual] = [actual, anterior + actual];
    }
    return anterior;
}