// Gestiones de errores dentro de Javascript


const miFuncion = valor =>{
    return 2 * valor;
}

console.log(miFuncion(7)); //14
console.log(miFuncion("hols")) //Nan

// Tenemos formas de controlar este tipo de errores.

const pruebaError = value => {
    if (typeof value === "number"){
        return 2 * value;
    }
    throw new Error("El valor tiene que se de tipo número");
}
console.log(pruebaError(4)) //8
// console.log(pruebaError("hola")) //Devuelve el mensaje de throw

//Como programadores tenemos que hacer que nuestro programa no pare de ejecutarse,
// Para ello tenemos que almacer el codigo que creamos que va a fallar entre unas palabras reservadas.

const numero = 4;

try {
//Codigo que puede fallar.
console.log(pruebaError(numero)); //8
console.log("Se ejecuta a la perfeccción")
}
catch(e){
    console.log(e); // E, es el mensaje que hemos declarado al originar el new Error. **El valor debe de ser tipo numero
    console.log("Ha dado un error");
}
finally {
    console.log("Este bloque siempre se ejecuta");
}
