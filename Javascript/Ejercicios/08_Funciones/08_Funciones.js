//Ejercicio.
// Crea un archivo que tenga :
//--> Una funcion sin parametros que devuelva siempre un true;
//--> Una funcion asincrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos despues de haberse ejecutado
//-->  Una funcion generadora de indices pares automaticos.

function primeraFuncion(){
    return true;
}
let valor = primeraFuncion();
console.log(valor); //true

// *************************************

async function tiempo(){
    return setTimeout(() => console.log("Hola, soy una promesa"))
}
console.log(tiempo()); //PAsados los segundos nos muestra por consola el mensaje.

// ************************************

function* genera(){
    let pares = 0;
    while (true){
        yield pares = pares + 2
    }  
}
const gen = genera();
console.log(gen.next())
console.log(gen.next())


