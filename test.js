// Importar las funciones del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');
// Test de suma 
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
// Test From Euro to Dollar
test("One euro should be 1.07 dollars", function () {
    const dollars = fromEuroToDollar(3.5);
    let expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});
// Test From Dollar to Yen
test("One dollar (1.07) should be 156.5 yen", function () {
    const yen = fromDollarToYen(1.07);
    let expected = 1.07 * 156.5;
    expect(yen).toBe(expected);
});
// Test From Yen to Pound 
test("One yen (156.5) should be 0.87 pound", function () {
    const pound = fromYenToPound(156.5);
    let expected = 156.5 * 0.87; 
    expect(pound).toBe(expected);
});