// Un módulo es una parte de codigo que se puede reutilizar en diferentas pares de nuestro programa
// Estan funciones tenemos que exportarlas para utilizarlas desde el exterior de este archivo
function suma (a,b){
    return a +b;
}
function multiplica(a,b){
    return a * b;
}
function eleva(a,b){
    return a ** b;
}
function factorial(a){
    let factorial = 1;
    for(let i = 1;i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}