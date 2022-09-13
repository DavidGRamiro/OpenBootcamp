//Como no trabajamos con Quokka, lo ejecutamos desde la terminal, metiendonos en la carpeta
// creada y lanzando el comando "node" + el nombre del archivo.

//Este código lo tenemos que guardar en un archivo aparte que recoja todas las operaciones que vayamos a utilizar
//para reutilizarlo desde los distintos mödulos.

// Formas de importar y exportar modulos.
// 1 -> CommonJS - require
// 2 -> Import ES6 - import

// const moduloFunciones = require("./Operaciones-Modulos/funciones.js");
// Forma mas elegante y limpia de importar.

const { factorial, suma, multiplica} = require ("./Operaciones-Modulos/funciones.js")

const sum = suma(5,6)
console.log(sum);

const mult = multiplica(5,5);
console.log(mult);

const fact = factorial(10);
console.log(fact);