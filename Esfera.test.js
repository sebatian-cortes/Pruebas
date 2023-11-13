const calculadora = require('.')

test('esfera', () => {
    const result = calculadora.volumenEsfera(14)
    expect(result).toBe(11488.213333333333);
});

test('esfera', () => {
    const result = calculadora.volumenEsfera(3)
    expect(result).toBe(113.03999999999999);
});

test('esfera', () => {
    const result = calculadora.volumenEsfera(9)
    expect(result).toBe(3052.08);
});

test('esfera', () => {
    const result = calculadora.volumenEsfera(12)
    expect(result).toBe(7234.5599999999995);
});

test('esfera', () => {
    const result = calculadora.volumenEsfera(57)
    expect(result).toBe(775341.36);
});

