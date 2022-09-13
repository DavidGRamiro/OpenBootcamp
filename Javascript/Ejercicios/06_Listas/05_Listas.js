//- Una variable que contenga la lista de la compra (mínimo 5 elementos)

var listaCompra = [
    { producto: "Pepinos"},
    { producto: "Pepinos"},
    { producto: "Pepinos"},
    { producto: "Pepinos"},
    { producto: "Pepinos"}

]
//- Modifica la lista de la compra y añádele "Aceite de Girasol"

const añadir = listaCompra.push("Aceite de girasol");
console.log(listaCompra);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

const eliminar = listaCompra.pop();
console.log(listaCompra);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
var listaPelis = [
    { pelicula: "Dos rubias de pelo en pecho", director : "Pepe" , fecha : "2002"},
    { pelicula: "Hijos de la Anarquia", director: "Juan", fecha: "2008"},
    { pelicula: "Gladiator", director: "David" , fecha: "2012"},
]
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const nuevaLista = listaPelis.filter(o => o.fecha > "2010")
console.log(nuevaLista);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = listaPelis.map(o => o.director)
console.log(directores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const pelis = listaPelis.map( o => o.pelicula)
console.log(pelis);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const fusion = pelis.concat(directores)
console.log(fusion)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const prop = [ ...directores, ...pelis]
console.log(prop)
