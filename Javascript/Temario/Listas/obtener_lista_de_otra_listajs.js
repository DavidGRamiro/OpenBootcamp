//Como obtener una lista a partir de otra. .slice();

const array = [ 1,2,3, "hola", "adios"];
// EL METO SLICE NO MODIFICA EL VALOR DEL ARRAY ORIGINAL.
// COn este metodo le decimos donde queremos que inicie, a partir de un indice y un final.
//A partir de aqui podemos crear otro array

console.log(array.slice(1,4)); //[ 2, 3, 'hola' ]

const array2 = array.slice(1,4);

console.log(array2); //[ 2, 3, 'hola' ]