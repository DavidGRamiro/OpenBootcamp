//Archivo llamado fechas.js
//La fecha de hoy.
//La fecha de mi nacimiento.
//Una variable que indique si hoy es mas tarde (>) que la fecha de tu nacimiento
// Una variable que contenga el dia de mi nacimineto.
//Una variable que contenga el mes de mi nacimineto. Enero => 0;
// Una variable que contenga el año de mi nacimineto. -> 4 digitos.

let date = new Date();
console.log(date);

let born = new Date(1994,1,4);
console.log(born);

let compare = date > born;
console.log (compare);
