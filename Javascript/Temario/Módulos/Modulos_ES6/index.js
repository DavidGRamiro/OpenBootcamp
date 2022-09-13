//Importarcion de los paquetes con ES6

import { suma, eleva, nombre } from './modulos/matematicas.js'
// SI queremos importar todo lo que hay en el archivo lo hacemos de la siguiente manera
// import * as (nombreQueLeDamos) from './ruta_del_archivo'
import getAutor, { libro } from './modulos/literatura.js';

const sum = suma(5,7);
console.log(sum);

const potencia = eleva(2,21);
console.log(potencia);

console.log(nombre);
console.log(getAutor())
console.log(libro);