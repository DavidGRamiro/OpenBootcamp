// Funciones asincronas.

function miAsnic(){
    // Una funcion que quiere hacer una llamada a una base de datos externa.
    // Puede dar algun error.
}
//POr si da alfun error hacemos llamada a las Promesas.

const miPromesa = new Promise((resolve,reject) => {

    //Si esta todo correcto
    const i = Math.floor(Math.random() * 2)
    if ( i !== 0){
        resolve();
    }else{
        reject();
    }
})

//Hemos creado un pequeño programa que nos de numeros aleatorios entre 0 y 2. Si es distinto a cero se ejecuta
// y entra en el resolve. Si es cero, en reject, y lo controlamos a traves de los .then, .catch y .finally.
// Para manipular las promesas lo hacemos de la siguiente manera.

miPromesa
    .then(() => console.log("Se ha ejecutado con éxito."))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Me ejecuto siempre"))



