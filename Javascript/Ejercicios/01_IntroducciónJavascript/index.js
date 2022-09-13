/**
 * Cuando hacemos el primer proyecto con Node, a traves de la terminal tenemos que inicalizarlo.
    Esto lo hacemos haciendo, en la terminal, "npm init".

    Una vez hagamos "npm init, tenemos que configurar la "descripcion" del proyecto. Dandole las caracteristicas que creamos convenientes, como puede
    ser la descripcion del proyecto por ejemplo.

    Una vez que hayamos terminado, se nos crea un archivo de tipo .json que recoge todas las caracteristicas que le hemos puesto al iniciar npm.
    Para esta primera prueba, nos fijaremos en el apartado de scripts, al que le pondemos algun nombre aleatorio.
    Normalmente se utiliza "start". Seguido de esto, tenemos que poner node + el archivo que queremos que nos abra.

    En este momento, y desde la terminal, tenemos que hacer que ejecute el archivo que le hemos asignado a start.
    Haciendo "npm run start" nos ejecuta esete script. En el caso de que no tengamos nada no nos aparecera nada, pero en este caso
    tenemos un console.log con un texto y esto nos hara que aparezca por pantalla.
 */

console.log("Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo");

