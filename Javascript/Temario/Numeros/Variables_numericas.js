// Declaración de variables nuúmericas. Enteros y decimales.

let a = 4;
console.log(a); //4

let b = 0.1;
console.log(b); //0.1

let c = 0.2;
console.log (b+c); // 0.300000000...

//No da exactamente 0.3 si no que añade muchos decimales. Esto es debido a como Javascript trata a las variables en memoria.

//Para rreglar esto podemos utilizar el siguiente operador

console.log (Math.round((0.1 + 0.2)*100)/100); //0.3




