//Trabajando con fechas

const fecha = new Date();
console.log(fecha); //Fecha actual
 //Los meses se inicializan en 0 => Enero y 11 => Diciembre
const fecha2 = new Date (1987,10)

console.log(fecha2);  //Sun Nov 01 1987 00:00:00

//Tambien podemos definir las fechas a traves de milisegundos.

const fecha3 = new Date (1000000000)
console.log(fecha3) //Mon Jan 12 1970 14:46:40

//Inicializar fechas a traves de Strings

const fecha4 = new Date ("October 13 ,1979 12:15:15")
console.log(fecha4) //Sat Oct 13 1979 12:15:15 GMT+0100 

// Obetener dia, mes y año de una fecha
//Dia

console.log(fecha);  //Fri Aug 05 2022 11:37:54
console.log(fecha.getDay())//5

//Mes + 1

console.log(fecha.getMonth() + 1) //8

// Año

console.log(fecha.getFullYear()) //2022

//Obtener de una fecha a un String
// Entre parentesis podemos poner los locales dependiento de que zona horaria queremos basarnos.

console.log(fecha.toLocaleDateString()) //5/8/2022
console.log(fecha.toLocaleDateString("en-USUS")) //En estadoa unidos nos muestra MES/DIA/AÑO 8/5/2022

