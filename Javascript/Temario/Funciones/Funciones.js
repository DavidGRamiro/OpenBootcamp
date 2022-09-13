// Que son las funciones, como se declaran y cómo se utilizan.

//Si modificamos algo dentro de nuestra funcion es la que llevará acabo. Si queremos saludar a David pero dentro de la
// función ponemos que nombre es igual a Juan nos saludará a Juan.

function saludar(nombre){
    nombre = "Juan"
    console.log(nombre); //Juan
}
saludar("David");

// Tambien podemos declarar variables y constantes para pasarlas por parámetro a la función.

const nombre = "David";
saludo(nombre);
function saludo(nombre){
    console.log(nombre); //David
}

//Podemos crear funciones en base a objetos.

let persona = {nombre : "David", apellido: "González"};

 console.log(persona); //{nombre: David , apellido: González}

//El nombre que va entre parametro es totalmente aleatorio y podemos poner el que nosotros queramos.
// Si modificamos el objeto dentro de la función, por consecuencia nos modifica el objeto general.
// Si hacemos un console.log despues a persona, que es el objeto original, veremos que nos ha cambiado el apellido.

function saludarPersona(objeto){
    objeto.apellido = "Perez"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`); //Hola David González.
}
saludarPersona(persona);
console.log(persona); //apelido...Perez.

//Asignar valores por defecto.

function imprimeNumero(numero = 7){ //Se autoinicializa con el numero 7. 
    console.log(numero);
}
imprimeNumero();

//Pasar por parametro parametros que no tenemos definidos.

function imprime(...parametro){
    console.log(parametro); // Nos muestra todos los datos que le hemos perdido.
}
imprime(1,2,2, {id : 8})

//Podemos hacer funciones que nos devuelvan un valor.
//Pero si queremos hacer que nos sume los valores lo hacemos a traves de reduce.
function suma(...nums){ //Efecto de propagacion. 

    return(nums.reduce((a,b) => a + b)) 
}
//Si queremos asignar estos valores a una variable.
const a = suma(1,2,3,4);
console.log(a); // Si a nuestra funcion no le ponemos la palabra reservada return no nos devuelve nada y a la hacer en console.log sale como undefinded.

//En el momento que se lo ponemos ya podemos acceder a la variable a y obtener el numero 10 que nos devuelve la funcion.