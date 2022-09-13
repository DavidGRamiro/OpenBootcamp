// 01 Una cadena de texto con tu Nombre
// 02 Otra cadena de texto con tu Apellido
// 03 Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
// 04 Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
// 05 Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
// 06 Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
// 07 Una variable que contenga la primera letra del Nombre
// 08 Otra variable que contenga la última letra del Apellido
// 09  Una cadena de texto que elimine los espacios de la variable "estudiante"
// 10 Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"



let nombre = "David";
let apellido = "González Ramiro";
let estudiante = nombre.concat(" ", apellido)
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
console.log(bol)




