// Manipulacion de las cadenas de texto.

let input = "Acuario";
let db = "acuario";

// Si comparamos estas dos cadenas seria falso por que una es minuscula y otra en mayuscula.
//toLowerCase(); toUpperCase();

console.log(input.toLocaleLowerCase == db.toLocaleLowerCase); // Verdadero por que las dos cadenas son en minusculas y concuerdan
console.log(input.toUpperCase == db.toUpperCase); // Verdadero por que las dos cadenas ahora estan en mayusculas.

//Formas de concatenar dos cadenas de caracteres.
// El método concat es el más adecuado ya que nos aseguramos evitar errores por si hay numeros no interfiera con los simbolos +.


let str1 = "Hola soy la primera cadena. ";
let str2 = "Hola soy la segunda cadena ";

console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`)

//Eliminar espacios del principio y del final.

let str3 = "     Soy otra cadena de texto.   "
console.log(str3.length); //29
console.log(str3.trimStart().length); //28 Elimina los espacios del principio
console.log(str3.trimEnd().length);//30 Elimina los espacios del final

//Obtener la letra que hay en cierta posición.

let str4 = "Soy el cuarto string";
console.log(str4.charAt(8)); //Nos devuelve la letra u
console.log(str4[8]); // Como si fuese una lista. Obtenemos la u tambien.

//Obtener la posicion de una palabra dentro de una cadena de texto.
//Quiero saber la posicion de David
// Si tuviese otro nombre David en la frase, y quiero saber su posicion utilizamos otra funcion.

let str5 = "Hola soy David y estoy estudiando Javascript. David va a ser un buen programador."
console.log(str5.indexOf("David")); // Esta en la posicion 9
console.log(str5.lastIndexOf("David"));// Devuelve que la ultima posicion en la que aparece David es en la 46.



