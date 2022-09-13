//Listas, arrays o arreglos.

// Tenemos varias maneras de declarar una lista.

//Declaración de una lista con parámetros.
const lista = [4,"Hola soy David",null, 8];

//Declaracion de otra lista como un new Array con parámetros.
const lista2 = new Array(8,"Soy David de nuevo", null,10);

//Lista vacia a la que le asignamos los valores después.
const lista3 = new Array();
lista3[0] = "Kaiser";
lista3[4] = "Sancho";

//Una lista con mas listas dentro
const lista4 = [lista, lista3]

//Lo que sale por pantalla para cada una de las listas declaradas.
console.log(lista);
console.log(lista2);
console.log(lista3)
console.log(lista4)

//Objetos.
//Para declarar los objetos los hacemos de la siguiente forma, seguido de los atributos que lo caracterizan.
//Podemos crear listas dentro de los objetos, u objetos dentro de los objetos, como en este caso es tarjeta con sus propios atributos.
const movil = {
    altura :10,
    anchura: 5,
    marca: "Apple",
    contactos: ["papa", "mama", "abuela"],
    tarjeta : {
        almacenamiento: 128,
        marca_tarjeta: "Sandisk",
    },
    color: "negro",   
}
//Para acceder a estos atributos a traves de la consola lo hacemos llamando al nombre del objeto seguido de un punto y el atributo que queramos objetener.

console.log(movil.marca);
console.log(movil.color);
console.log(movil.tarjeta.marca_tarjeta);

//Fechas.
// Una libreria de apoyo buena puede ser Momento.js

const ahora = new Date();
console.log(ahora);

//Sacamos la llamada fecha 0 utilizando milisegundos.
const fecha_milis = new Date(10);
console.log(fecha_milis);

//Fecha añadiendole parámetros.
const fecha_cadena = new Date("march ,25 ,2020");
console.log(fecha_cadena);

//Fecha con valores.
const fecha_valores = new Date(2022,2,4);
console.log(fecha_valores);

//Fecha a partir de constantes. Para el año le sumamos uno por que en las fechas es como un Array. La posicion 0 equivale a Enero.
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const año = ahora.getFullYear();

console.log(dia, mes, año)



