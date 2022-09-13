// Declaracion de variables
var variable;
let varLet;
// const constante; Para comentar rapidamente utilizamos la opcion de ctrl + }
const constante = "Hola que tal";

var a = 1;
console.log(a);

var a = 5;
console.log(a);

console.log(constante);
// constante = "Me gustaria saber que tal estás" Da error por que una constante siempre tiene ese mismo valor. Tendriamos que cambiarf el tipo a variable

//Lo mas común en JS es utilizar la declaracion de variables como let y no como var.

let b = 8;
console.log(b);

b = 9;
console.log(b);

//  Diferencias entre la declaracion de las variables LET y VAR
//  Al declarar variables VAR afecta a todo el código. Yo queria en este caso que me sacase por pantalla el primer texto que he declarado.

var variable = "Soy una variable de VAR";
    for (i=0;i<3; i++) {
        var variable = "Soy la segunda variable VAR";
    }
    console.log(variable);

//  Sin embargo, al declarar las variables de tipo LET solo afectar al bloque en el que lo declaramos. Ademas vemos como VSCODE nos lo muestra,
//  haciendo la segunda variable LET coloreada de un color más ocuro y nos muestra por pantalla el texto de la primera variable LET.

let variableLet = "Soy una variable de tipo LET";
    for(i=0;i<3;i++){
        let variableLet = "Soy una segunda variable de tipo LET";
    }

    console.log(variableLet)

    ////////////////////////////

    // Existe una funcionalidad para saber de que tipo es la variable que hemos declaro. Se hace de la siguiente manera.

    console.log(typeof a);
    console.log(typeof variableLet);