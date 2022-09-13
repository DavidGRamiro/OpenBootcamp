// Operador .valueOf() Obtener valores númericos a partir de literales.
let a = 2;
let b = new Number(3);

console.log(a + b);
//Internamente el interprete nos saca el valor de la variable b, que e sun 3 y opera como un number.
console.log(a.valueOf()); //2
console.log(b.valueOf()); //3

// NaN - Infinity
let n = Number("Hola");
console.log(n); //NaN "Not a Number".
console.log(isNaN(n)); //True

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor); //Infinity. Cuando divisimos por un operador muy pequeño.

let divisor_2 = null;
console.log(numerador / divisor_2); //Infinity.


//Como convertir los string a valores númericos con number, ParseInt, y parseFloat.

let numero = "5.89";
let num = 17;
console.log (typeof numero); // String
console.log(typeof num); //Number.

console.log(numero + num); //Error de concepto.
//Para ello casteamos el string con el operador number.
console.log(Number(numero) + num); //22.89

// En cambio, si queremos que el numero lo queremos en un número entero tenemos el siguiente operador.
console.log(parseInt(numero)); //5. Quita los decimales.

//Numeros hexadecimales.
let numHex = "0x3a5b7";
console.log(parseInt(numHex)); //239031

//Obtener valores máximos y mínimos.
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision); //Precision minima que tenemos para pasar de un número a otro. --> 2.220446049250313e-16 --> 0.00000000000000000002
console.log(min_valor_JS); //5e-324 Valor minimo con el que puede operar JS
console.log(max_valor_JS); //1.79769... Valor máximo que puede operar JS