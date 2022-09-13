//- Una variable que contenga tu altura en centímetros (entero)
let altura = 168;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let altura_metros = 1.68;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 62.50;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let redondeo = Math.round(altura_metros);
console.log(redondeo);//2

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let redondeobajo = Math.floor(peso);
console.log(redondeobajo);//62

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max_valor_str = "el máximo valor que se puede obtener en Javascript + 1";
let max_valor_number = Number.MAX_VALUE;

console.log(max_valor_number === max_valor_str); //FALSE