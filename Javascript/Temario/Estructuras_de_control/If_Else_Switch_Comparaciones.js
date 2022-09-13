// Estructuras de control
// Las estrucutras de control nos sirve para probar condiciones entre variables, y a partir del resultado hará una acción u otra

let saldo = 10;

if(saldo > 20){
    console.log("Puedes sacar dinero");
} else {
    console.log("No puedes sacar dinero");
}

// If else + If else

let nota = 5;

if (nota === 5){
    console.log("Enhorabuena has aprobado")
} else if(nota === 4) {
    console.log("Lo podrías haber hecho mejor");
} else if(nota === 3){
    console.log("Esfuerzate más");
} else if(nota === 2){
    console.log("No has hecho nada");
} else if(nota === 1){
    console.log("Te doy un 1 por el nombre");
} else if(nota === 0){
    console.log("Ni has abierto el libro");
}else{
    console.log("Introduce una nota valida");
}

//  Switch nos permite en funcion de un valor poner varias condicones.
//  Si no ponemos el break después de cada condición, nos leera todas aquellas que se cumplan.
//  Para hacer que salga del bucle hay q poner break y solo nos evaluará la que queramos.
//  SIEMPRE hay q poner un caso por defecto que es el default. En caso de que no se cumpla ninguna condicion examinará lo que hay declara por defecto.

let resultado = 8;

switch(resultado){
    case 10:
        console.log("Eres el mejor de la promoción");
        break;
    case 9:
        console.log("Casi rozas la perfección");
        break;
    case 8: 
        console.log("Muy buen trabajo");
        break;
    case 7:
        console.log("Gran trabajo!");
        break;
    case 6:
        console.log("Podrías haberlo hecho mejor");
        break;
    case 5:
        console.log("Aprobado por los pelos");
        break;
    default:
        console.log("No te has presentado al exámen")
        break;
}

//Comparaciones

//Igualdad
// La diferencia principal es que == compara el valor. En este caso 5.
// Sin embargo con === (3 iguales) lo que compara es el valor y el tipo de la variable.
// Hacemos la prueba con valor númerico y con valor string.
// == Es una igualdad débil
// === Es una igualdad fuerte.

let a = 5;
    console.log(typeof a);
let b = 5;
    console.log(typeof b)

if (a == b){
    console.log("Son iguales en valor")
}

if (a === b){
    console.log("Son iguales en valor y tipo");
}

////////////////////

let c = 10;
    console.log(typeof c)
let d = "10";
    console.log(typeof d)

if (c == d){
    console.log("Son iguales en valor")
}

if (c === d){
    console.log("No son iguales en valor y tipo.")
}


// Desigualdad
// La desigualdad lo hacemos poniendo una excalamación delante de los iguales.
// Al igual que en las igualdades, hay igualdades débiles e igualdades fuertes.
// != Desigualdad débil.
// !== Desigualdad fuerte.

let x = 4;
let z = 3;

if (x != z){
    console.log("Son diferentes. Desigualdad débil");
}

if (x !== z){
    console.log("Son diferentes. Desigualdad fuerte")
}

// Como en el caso anterior, el doble igual y el tripe igual en desigualdad tambien evalua el tipo y el valor.

let y = 5;
let w = "5";

if (y != w){
    console.log("Son diferentes. Desigualdad debil");
}

if (y !== w){
    console.log("Son muy diferentes. Desigualdad fuerte.")
}

