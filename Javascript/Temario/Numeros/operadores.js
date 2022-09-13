//Principales operaciones aritmetricas.

let a = 3.5;
let b = 4.8;

//Suma
console.log(a + b); //8.3

//Resta
console.log(a-b); //-1.29999...

//Multiplicación
console.log( a * b); // 16.8

//División
console.log(a / b); //0.729....

//Representación de los números en cadenas de texto.

let a_s = a.toString();
console.log (typeof a); //number
console.log(typeof a_s); //string

// Redondeo de números decimales.
let c = 3.3;
let d = c * 3;

console.log(d); //9.89999...
console.log(typeof d); //Number
//Si a partir de este numero yo quiero obtener un redondeo lo hacemos con el siguiente operador.

console.log(d.toFixed(2)) //9.90. Dependiendo el numero que le pongamos entre parentesisis nos dara la cantidad de decimales que queremos.
console.log(typeof d.toFixed()); //String. Al hacer este operador convierte el numero en un string.

// Precision. Si queremos onbtener de un número, las cifras significativas.
let e = 1238.254458;
console.log(e.toPrecision(5)); //delimitamos el cantidad de cifras que queremos del número.
console.log(typeof e.toPrecision()); // Tambien devuelve un string.




