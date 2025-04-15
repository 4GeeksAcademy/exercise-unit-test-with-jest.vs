// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
};
// Ejercicio cambio de divisas 
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87,  // British pound
};
// Función para "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
};
// Función para "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs.JPY;
    // Retornamos el valor en yen
    return valueInYen;
};
//Función para "fromYenToPound"
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * oneEuroIs.GBP; 
    // Retornamos el valor en pound 
    return valueInPound; 
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};