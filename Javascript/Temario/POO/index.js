//Podemos crear funciones que creen objetos. Pero en el momento de que 
// queramos hacer un cambio lo tenemos que hacer en todos ellos.

const persona = {
    nombre: "David",
    edad: 28,
    isDeveloper: true,
    saludo : function(){
        console.log("Hola")
    }
}
// console.log(persona)
persona.saludo();

const otra_persona = {
    nombre:"Adrian",
    edad: 22,
    isDeveloper: false,
    saludo : function(){
        console.log("Hola")
    }
}

// De esta manera, creando esta funcion factorial, a partir de la llamada a esta funcion
// creamos nuevos objetos sin tener que construirlos uno por uno.
//Fuction Factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, //nombre : nombre
        edad,
        isDeveloper,
        saludo : function(){
            console.log("Hello")
        }
    }
}
const nueva_persona = creaPersona("Juan",28,true);
console.log(nueva_persona)

