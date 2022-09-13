// Bucles For

for (i = 0; i <10; i++){
    //Esto es el bucle
    console.log(i)
}

//Maneras para recorrer una lista.
let lista = [1, 4, 7 , 8, 9, 12];

for(i = 0;i< lista.length; i++ ){
    console.log(lista[i]);
}

//For of, para saber el valor de cada uno de los espaciones de la lista.
for (valor of lista){
    console.log(valor);
}

// For each. Es la llamada función flecha
lista.forEach(valor => {
    console.log("valor");
})

// For in

let persona = {
    nombre: "David",
    apellido: "González",
    developer: false,
    edad: 28
}
// Si queremos sacar el valor especificio de una persona declaramos otra variable.
// Para acceder a ella tenemos que ponerlo entre corchetes.

console.log(persona.nombre);
let prop= "edad";
console.log(persona[prop])

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])  
}