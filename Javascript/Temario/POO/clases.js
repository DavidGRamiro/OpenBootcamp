// Formas de declarar una clase dentro de Javascript

class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }


    saludo(){
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad}`)
    }

}

const nueva_persona = new Persona("David",28,true);
console.log(nueva_persona)
nueva_persona.saludo();

let numero = 60; //Inicializamos una variable
let persona_2 = new Persona("Maria",34,false) //Instanciamos una variable

//instanceof -> parecido a typeof

console.log(typeof numero); //number
console.log(typeof persona_2) //Objetc
console.log(persona_2 instanceof Persona) //true por que hereda de la clase Persona
