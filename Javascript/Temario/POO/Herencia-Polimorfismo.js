// Herencia respecto a las clases
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

class Desarollador extends Persona{
    constructor(nombre,edad,lenguaje){
        super(nombre,edad);
        this.lenguaje = lenguaje;
    }

    saludo(){ //Override o sobreescritura.
        super.saludo();
        console.log( `Soy desarrollador de ${this.lenguaje}`);
    }
}

const nuevodev = new Desarollador("David",28,"Java")

console.log(nuevodev);
nuevodev.saludo() //Metodo que deriva de la clase padre Persona.

// Polimorfismo

//Con el polimorfismo podemos hacer llamadas a otros metodos padres y sobreescribirlos.
// Hemos creado un Override en la clase Desarrollador y llamaos al método padre

nuevodev.saludo();
//Por pantalla nos devuelve el saludo que esta programado en la clase padre Persona, y además nos da el saludo personalizado dentro de la clase Desarrrollador.


