// Como trabajar con listas u Arrays
var1 = 45;
let array = [1,"Hola",false,{id:5},null, undefined, var1];

console.log(array);

//Acceder a los valores de un array a traves de su posición.
//array[indice]
console.log(array[1]); //Hola

//Metodos para introducir nuevos valores en nuestros Arrays.
// .push .undshift() => Mutan el valor de nuestro array.
//Valores al final -> Push.

array.push("final");
console.log(array) // Nos aparece la palabra final al final de nuestro array. Esto modifica el valor y su longitud.

array.unshift("inicio");
console.log(array); // Añade inicio al principio del array.

//Metodos para eliminar valores de nuestros arrays.
//.pop() .shifth() => Tambien mutan el valor del array.

const array2 = [1,3,"Hola", false];
array2.pop();
console.log(array2); // Nos elimina el false del final.

array2.shift();
console.log(array2); // Nos quita el 1 del principio.

//Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(x,y,z);

const array3 = [1,2,3,4,5];
//Tenemos que decirle por parametros a partir de que indiice queremos que elimine, y cuantos indices por denlante de el.
array3.splice(2,1) 
console.log(array3); // 1,2,4,5

//Añadir valores .splice(indice, 0 valores a eliminar, valores);
array3.splice(2,0,"hola");
console.log(array3); //[ 1, 2, 'hola', 4, 5 ]

//Modificar valores.
//En el indice 2, vamos a elimnar un valor, y vamos a añadir el numero 3.
array3.splice(2,1,3)
console.log(array3); //[ 1, 2, 3, 4, 5 ] 