const calculadora = require('.')

test('factorial de un numero', () => {
    const result = calculadora.factorial(8)
    expect(result).toBe(40320);
});

test('factorial de un numero', () => {
    const result = calculadora.factorial(3)
    expect(result).toBe(6);
});

test('factorial de un numero', () => {
    const result = calculadora.factorial(0)
    expect(result).toBe(0);
});

test('factorial de un numero', () => {
    const result = calculadora.factorial(1)
    expect(result).toBe(1);
});

test('factorial de un numero', () => {
    const result = calculadora.factorial(6)
    expect(result).toBe(720);
});