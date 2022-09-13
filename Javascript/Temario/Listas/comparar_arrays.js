// Como podemos comparar listas
// .every()

const array = [4,6,8,2,1,-40,8,15,-123]
const resultado =array.every( valor => {
    if ( typeof valor === "number"){
        return true
    } else {
        return false
    }
})

console.log(resultado)  //TRUE por que todos los valores son numeros

//La forma optimizada de hacerlo.

const resultado2 = array.every( valor => valor >0)
console.log(resultado2); // FALSE por que hay numeros negativos.

// Comparacion de listas

const ar1 = [ 1, 2 , 3]
const ar2 = [ 1, 2 , 3]

console.log (ar1 === ar2);

const compararArray = (array1, array2) =>{
    if (array1.length !== array2.length) return false
    const res = array1.every((valor,i) => valor === array2[i])
    return res
}

console.log(compararArray(ar1, ar2))