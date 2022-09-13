// Trabajando con Objetos.

const obj = {
    id: 4,
    nombre: "Juan",
    apellido : "González",
    developer: true,
    librosFavoritos: ["El método", "El codigo de la manifestación"]

}
//Accedewr a las propiedades de los objetos.
console.log(obj.nombre); //Juan

const prop = "developer";
console.log(obj[prop]); //True

const obj2 = obj;
console.log(obj2); //Devuelve los valores del objeto 1

//Tenemos la misma referencia en memoria por lo que se sobrescribe los cambios.
obj2.nombre = "David";
console.log(obj2.nombre) //David

console.log(obj.nombre) // David

//Hacer una copia de objetos.

const obj3 ={ ...obj }
console.log(obj3) // Todos los datos del objeto 1

console.log(obj.nombre) //David
console.log(obj3.nombre) //David

obj3.nombre = "Pepito"
 
console.log(obj.nombre) //David
console.log(obj3.nombre) //Pepito

//////////
//Como ordenar listas de objetos en funcion de una propiedad.

const listaPelis = [
    { titulo: "Lo que el viento se llevo" , anyo: 1939},
    { titulo: "Titanic", anyo : 1997},
    { titulo: "Moana", anyo : 2016},
    { titulo: "El efecto mariposa", anyo : 2004},
    { titulo: "TED", anyo : 2012},
] 

console.log (listaPelis) // Nos devuelve la lista de las peliculas y años declarados.
//Para ordenador. .sort() => Muta el valor del array original

listaPelis.sort((a,b) => a.anyo - b.anyo) 
console.log(listaPelis) //Nos devuelve la lista ordenada de la pelicula mas vieja a la mas actual