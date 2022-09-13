// Archivo duplicado sesion 04.

let nombre = "David";
let apellido = "González Ramiro";
let estudiante = nombre.concat(" ", apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
var longitud = estudiante.length;
var letra = nombre.charAt(0);
var ultima_letra = apellido.charAt(14);
var espacios = estudiante.replace(/\s/g,""); // Con el comando \s selecciona todos los espacios 
var bol = estudiante.includes(nombre);


console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longitud);
console.log(letra);
console.log(ultima_letra);
console.log(espacios);
console.log(bol);


