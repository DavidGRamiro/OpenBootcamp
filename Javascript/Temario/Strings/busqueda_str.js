// Métodos de cadenas de texto (parte 3);
// https://regexr.com es una pagina en la que tienes las expresiones regulares que podemos utilizar.

let texto = "Kaiser es un gato común europeo. Kaiser tiene 3 años. Kaiser es un gato que suelta mucho pelo. No sabria que hacer sin Kaiser."

console.log(texto.match(/Kaiser/g)); // Con esta funcion nos dice la cantidad de veces que han aparecido en nuestro tecto. En este caso son 3 veces.

//Metodo para saber si existe una palabra dentro de una cadena de caracteres.

console.log(texto.includes("Kaiser")); //TRUE por que si aparece.

console.log(texto.includes("Sancho")); // FALSE por que no aparece en el texto.

// Saber si un texto empieza por una palabra.
console.log(texto.startsWith("Kaiser es un gato")); // Por que el texto empieza con estas palabras.

// Para saber si un texto termina con una palabra en especifico.

console.log(texto.endsWith("hacer sin Kaiser.")) //TRUE por que termina con estas palabras. El punto del final incluido. Si no, seria FALSE.
