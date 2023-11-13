const calculadora = require('.')

test('division', () => {
    const result = calculadora.dividir(1, 2)
    expect(result).toBe(0.5);
});

test('division', () => {
    const result = calculadora.dividir(30, 5)
    expect(result).toBe(6);
});


test('division', () => {
    const result = calculadora.dividir(10, 10)
    expect(result).toBe(1);
});

test('division', () => {
    const result = calculadora.dividir(1986, 0)
    expect(result).toBe(0);
});

test('division', () => {
    const result = calculadora.dividir(12, 3)
    expect(result).toBe(4);
});