//Cuando creamos clases, es recomendable que ciertos atributos sean 
// provados o protegidos para evitar fallos en el programa.
// Solo se pueden acceder a ellos a traves de la propia clase.


class Persona {
    //Privated -> #
    #edad;
    #nombre;

    //Protected -> _nombre
    _isDeveloper = true;

    constructor(nombre,edad,isDeveloper){
        this.#nombre = nombre;
        this.#edad = edad;
        this.isDeveloper = isDeveloper;
    }
    saludo(){
        console.log(`Hola, me llamo ${this.#nombre}, tengo ${this.#edad}`)
    }

    //Metodo privado
    #obtenNombre(){
        return this.#nombre;
    }

    obtenEdad(){
        return this.#edad;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(nuevaedad){
        this.#edad = nuevaedad
    }
}

const persona = new Persona ("David", 28, true);
console.log(persona.nombre) //Como esta fura de la clase Perosna no podemos acceder a ella
persona.saludo();


//Getter y Setter
// Metodos que nos permiten acceder a los atributos y modificarlos

const edad = persona.getEdad();
console.log(edad) //28

persona.setEdad(34);
console.log(persona.getEdad()) //34

