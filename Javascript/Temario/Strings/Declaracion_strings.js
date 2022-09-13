// Maneras de declarar Strings en Javascript

let str1 = "Esto es un texto con comillas dobles";
let str2 = 'Esto es un texto con comillas simples';

console.log(str1);
console.log(str2);

//Se pueden concatenar los strings de la siguiente manera.
//La unica peculiaridad que tiene aparte de los simbolos que empieza por el $ seguido de {}, es que le podemos meter variables entre los corchetes.
//Solo funcionara si le ponemos las comillas simples invertidas, en ambas direcciones. ``

let nombre = "David"
let saludo = `Hola ${nombre} que tal estás`
console.log(saludo);

// También sirve para poder concatenar una introduccion a código html. Por ejemplo..

let plantilla = `
<html>
    <h1>esta es la pagina web de ${nombre}</h1>
    <p>Esto es un párrafo</p>
</html>
`;
console.log(plantilla);