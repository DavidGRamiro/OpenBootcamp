// Iterar los valores de una lista.

const array = [ "hola" , 2 , 5 , 90, false,undefined];

//Forma antigua de recorrer un array
for (let i = 0; i < array.length; i++){
    console.log(array[i]); //[ "hola" , 2 , 5 , 90, false,undefined]
}

//Forma ES& más eficiente. ForEach
// COn esto lo que estamos haciendo es asignarle cada uno de los valores del array, a la variable valor.

array.forEach(valor =>{
    console.log(valor);
})

// Busqueda de un valor dentro de de una lista .find(); Imaginamos que queremos buscar el elemento 90;

const variable = array.find(valor => {
    if (valor === 90)
    return true;
})

console.log(variable); //90


const listaObjetos = [
    { nombre: "Leire", edad: 20},
    { nombre: "Miguel", edad: 25},
    { nombre: "David", edad: 28},
    { nombre: "Celia", edad: 30},
]

const objeto = listaObjetos.find(o =>{
    if (o.nombre === "Celia")
        return true;
})

console.log(objeto.nombre); //Celia
//Se puede hacer de una forma mas eficiente de la siguiente manera.
//En el caso de que quiera saber cuantos años tiene Celia

const { edad } = listaObjetos.find(o => o.nombre === "Celia");
console.log(edad); // 30