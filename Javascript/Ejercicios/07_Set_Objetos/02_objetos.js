// Archivo llamdado objetos.js
// Un objeto con los datos personales. Nombre, apellido, edad, altura, isDeveloper
//Variable que contenga la edad a partir del objeto anterior.
//Una lista con los objetos de la lista anterior ordenados por edad, de mayor a menor.

const data = {

    nombre: "David",
    apellido: "González Ramiro",
    edad: 28,
    altura: 173,
    isDeveloper: true,
}

let edad = data.edad;
console.log(edad);

const friendsData = 
[   
    { ...data},
    { nombre: "Roberto", apellido: "Suarez", edad: 29, altura : 180, isDeveloper: false },
    { nombre: "Kike", apellido: "Perez", edad: 30, altura: 170, isDeveloper: true }
]

console.log(friendsData);

const ordenada = friendsData.sort((a,b) => b.edad - a.edad);
console.log(ordenada);