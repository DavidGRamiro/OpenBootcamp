class Estudiante {
    nombre;
    asignaturas;
    constructor (nombre,asignaturas) {
        this.nombre = nombre;
        this.asignaturas = ["HTML","Javascript","CSS"];
    }
    obtenDatos(){
        return (`Me llamo ${this.nombre} y mis asignaturas favoritas son ${this.asignaturas}`)
    }   
}
const estudia = new Estudiante("David")
const datos = estudia.obtenDatos();


console.log(datos)