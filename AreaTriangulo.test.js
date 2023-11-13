const calculadora = require('.')

test('area triangulo', () => {
    const result = calculadora.areaTriangulo(2, 1)
    expect(result).toBe(1);
});

test('area triangulo', () => {
    const result = calculadora.areaTriangulo(5, 6)
    expect(result).toBe(15);
});

test('area triangulo', () => {
    const result = calculadora.areaTriangulo(56, 45)
    expect(result).toBe(1260);
});

test('area triangulo', () => {
    const result = calculadora.areaTriangulo(25, 0)
    expect(result).toBe(0);
});

test('area triangulo', () => {
    const result = calculadora.areaTriangulo(6, 20)
    expect(result).toBe(60);
});