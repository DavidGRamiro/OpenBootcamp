// Sets o Conjuntos.
// Array -> Es un conjunto ordenado de valores y Objetos.
const array = [1,2,3,4,5,8,1,5]

// Set -> Conjunto no ordenado de valores únicos. No permite repetidos.

const miSet = new Set(array);
console.log(array); //[ 1, 2, 3, 4, 5, 8, 1, 5 ]
console.log(miSet); //Set { 1, 2, 3, 4, 5, 8 } No se repiten los valores.

//Principales métodos para añadir valores.
//Añadir

miSet.add(9);
console.log(miSet); // Añade un 9 al final. Set { 1, 2, 3, 4, 5, 8, 9 }

//Delete

miSet.delete(5);
console.log(miSet); //Set { 1, 2, 3, 4, 8, 9 }

//Eliminar todos los valores de miSet
/*
miSet.clear()
console.log(miSet) //Set {  } 
*/

//Como saber si mi Set tiene un determinado valor.

console.log(miSet.has(4)) //TRUE

//Saber el tamaño de nuestro Set

console.log(miSet.size) //6 Valores unicos.

//Hacer una iteraccion dentro de los valores.

miSet.forEach(valor =>{
    console.log(valor); // 1,2,3,4,8,9
})

//Acceder a traves del metodo de propagación

const arSet = [ ...miSet ];
console.log(arSet); //[ 1, 2, 3, 4, 8, 9 ]

//Y para acceder a los valores.

console.log(arSet[3]) //4
