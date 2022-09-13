// Funciones de tipo flecha y funciones anónimas.
// Imaginamos que queremos tener el doble del valor que hemos pasado por parámetros.

const array = [1,5,6,7,8,9];

const array2 = array.map((valor) => valor * 2);
console.log(array); // Array original
console.log(array2); // EL doble del array original. 

// POdemos declarar una funcion que nos haga el mismo proceso de la siguiente manera.

function valorDoble(valor){
    return valor * 2;
}
console.log(valorDoble(5)) //10;

// A la funcion podemos acceder a ella en cualquier parte de nuestro
// Sin embargo si hacemos una funcion de tipo fleca solo podemos acceder a ella inmediatamente después de haber sido inicializada.

console.log(array4) //No podemos acceder al array 4 por que todavia no ha llegado a esa parte del código.

const array3 = [2,4,8,6,10,20];
const array4 = array3.map((valor) => valor * 2);
console.log(array4); //4,8,16...



