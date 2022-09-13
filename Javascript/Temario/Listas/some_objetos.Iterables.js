// como saber si algunos elementos de una lista cumplen la condicion

// .some()

const array = [ 3,7,8,9,10,11,28,93,54,678]

const resultado = array.some(valor => valor >678)
console.log(resultado); //FALSE

// Saber si un valor existe

const existe = array.some( valor => valor === 54)
console.log(existe); // TRRUE por que si existe ese numero en nuestra lista

//Busqueda en una lista de objetos
const listaObjetos = [
    { nombre : "David", edad: 28},
    { nombre : "Celia", edad: 29},
    { nombre : "Adrian", edad: 21},
    { nombre : "Susana", edad: 40},
    { nombre : "Kaiser", edad: 2},
]

const existeDavid = listaObjetos.some( persona => persona.nombre === "David")
console.log(existeDavid) //True

// Como obtener una lista a partir de un objeto iterable
const str = "Hola soy David"

const ar_str = Array.from(str)
console.log(ar_str); //['H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'D', 'a', 'v', 'i', 'd' ]

//Sacar las claves de nuestro array

const keys = array.keys()
const ar_keys = Array.from(keys)

console.log(ar_keys)