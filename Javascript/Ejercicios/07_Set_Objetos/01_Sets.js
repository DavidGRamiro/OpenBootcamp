//Archivo llamando Conjuntos.js
//Un set con los nombres de mi familia.
//Modificar el Set original añadiendo mi nombre (duplicado) Debe de dar el mismo resultado
//Modificar el set original añadiendo el nombre "Javascript" 

const famArray = ["David", "Conchi", "Adrián", "Celia", "Kaiser", "Sancho"];
const famSet = new Set(famArray);

console.log(famArray);
console.log(famSet);

famSet.add("David");
console.log(famSet);

famSet.add("Javascript");
console.log(famSet);
