// Como unir dos listas.
// .concat(lista2);

const lista1 = [1,2,"hola",3];
const lista2 = [4,5,"adios,6"];

console.log(lista1.concat(lista2)); //[ 1, 2, 'hola', 3, 4, 5, 'adios,6' ]

const lista3 = lista1.concat(lista2);

//Como unir dos listas con el factor de propagacion.

console.log(...lista3);

const list4 = [...lista1, ...lista2];
console.log(list4); // Lista concatenada  1, 2, 'hola', 3, 4, 5, 'adios,6' 
