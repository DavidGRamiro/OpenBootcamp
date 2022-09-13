//  Trabajar con métodos más avazados.
// .map() .filter() .reduce()

const array = [ "San Sebastian", "Madrid", "Bacelona", "Alicante" , "Bilbao"]

array.forEach (v => {
    console.log(v)
});

// EL for each no devuelve nada. pero imaginamos que lo que queremos hacer es retornar un Array y por ejemplo añadirle un numero cada uno de los elementos del array. 

// la función map nos permite poner en la funcion callback dos parámetros. El valor y el indiice. Le sumamos uno por que si no el primer elemento tendria indice 0;

const newArray = array.map((valor, indice) => {
    return `${indice + 1} ${valor}`
})
console.log(newArray); //'1 San Sebastian','2 Madrid' '3 Bacelona','4 Alicante','5 Bilbao' ]


//Normalmente se suele utilizar los arrays con objetos.

const arrayObj = [
    { nombre: "David", edad: 28},
    { nombre: "Celia", edad: 26},
    { nombre: "Jose", edad: 30},
    { nombre: "Adrian", edad: 21},
    { nombre: "Lucia", edad: 33}
]

 const personasMayores = arrayObj.filter( obj =>{
    if (obj.edad > 30){
        return true;
    }else{
        return false
    }
})

console.log(personasMayores); //[ { nombre: 'Lucia', edad: 33 } ]

//Podemos hacer esto de una manera mucho mas optimizada.

const personasMayores2 = arrayObj.filter( obj => obj.edad > 30);

console.log(personasMayores2); //[ { nombre: 'Lucia', edad: 33 } ]

//Imaginamos que queremos sacar todas las personas menos la de David.

const nuevaLista = arrayObj.filter( obj => obj.nombre !== "David"); //Expresa desigualdad

console.log(nuevaLista); // Me retorna todos los nombres menos el de David.


//Imaginamos que queremos sumar los valores que tiene un array. Acepta 4 parametros. 2 Obligatorios.
// Acumulado es el valor actual, e indice es la posicion que ocupa en el array.

const valores = [ 1, 4 , 10, 20]

const suma = valores.reduce((acumulado,indice) => {
    return acumulado + indice
})
console.log(suma); //35