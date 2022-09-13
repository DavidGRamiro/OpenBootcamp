// Funciones generadoras

function* generaId(){
    let id = 0;
    while(true){
        id++;
        if (id === 5){
            return id
        }
        yield id; //Espera hasta que se vuelve a llamar a la funcion generadora.
    }
}

const gen = generaId();

console.log(gen.next()) //Valor 1 - terminado false
console.log(gen.next()) //Valor 2
console.log(gen.next()) //Valor 3
console.log(gen.next()) //Valor 4
console.log(gen.next()) //Valor 5 -- terminado true
console.log(gen.next()) //Valor sin definir ya que ha terminado la funcion generadora.