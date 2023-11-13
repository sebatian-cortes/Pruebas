const calculadora = require('.')

test('valorAbsoluto', () => {
    const result = calculadora.valorAbsoluto(2)
    expect(result).toBe(2);
});

test('valorAbsoluto', () => {
    const result = calculadora.valorAbsoluto(-56)
    expect(result).toBe(56);
});

test('valorAbsoluto', () => {
    const result = calculadora.valorAbsoluto(110)
    expect(result).toBe(110);
});

test('valorAbsoluto', () => {
    const result = calculadora.valorAbsoluto(-45)
    expect(result).toBe(45);
});

test('valorAbsoluto', () => {
    const result = calculadora.valorAbsoluto(0)
    expect(result).toBe(0);
});