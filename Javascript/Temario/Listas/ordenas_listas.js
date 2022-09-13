// Como ordenar listas.
// .sort() -> Modifica el array


const array = [2,5,9,15,1,2,8]

// A -> Representa el elemento anterior B -> El siguiente elemento.
array.sort((a, b) => {
    if ( a > b){
        return +1
    } else {
        return -1
    }
})
console.log(array) //[ 1, 2, 2, 5, 8, 9, 15 ]

// Hay una forma mas optimizada de hacerlo.

const arrayNumerico = [ 1, 8, 9 ,1 ,58, 1, 3, 800, 123]

const ordena = arrayNumerico.sort((a,b) => (a - b));
console.log(ordena); //[ 1, 1, 1, 3, 8, 9, 58, 123, 800 ]

const listaObjetos = [
    { nombre : "David", edad: 28},
    { nombre : "Celia", edad: 29},
    { nombre : "Adrian", edad: 21},
    { nombre : "Susana", edad: 40},
    { nombre : "Kaiser", edad: 2},
]

 const ordenaObjetos = listaObjetos.sort((a , b) =>{
    if (a.edad < b.edad){
        return -1
    } else if (a.edad > b.edad){
        return +1
    } else {
        return 0
    }
})
 console.log(ordenaObjetos); // Nos muestra todos los objetos de menor a mayor edad.

