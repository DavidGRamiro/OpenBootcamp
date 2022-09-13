// Ejercicio que consiste en la creacion de proyecto en node,
// para la gestion de errores a traves de la libreria de Winston.
// Trataremos el error a traves del try catch

function resultado(valor){
    if(valor <= 5){
        console.log(valor);
    }
    else {
        throw new Error("El valor debe de ser menor o igual que 5");
    }
}

try{
    resultado(20)
    console.log("Programa ejecutado correctamente");
}
catch(e){
    console.log("No se ha ejecutado");
    console.log(e);
}
finally{
    console.log("Esto se ejecuta siempre")
}
console.log(resultado);