// Este es el archivo sobre el que vamos a trabajar.
// La forma adecuada de trabajar con ESLint es instalando mediante node,
// la libreria. Primero de todo creamos un archivo de node,
// Y despues, instalamos las dependencias de ESLint ( npm i -D eslint ) y despues ( npm init @eslint/config)
// Una vez creado nos hace una serie de preguntas para ayudarnos en la configuracion del proyecto que estemos generando.
// Se nos crea un archivo nuevo en el que pondremos las reglas que nosotros queramos añadir.

const nombre = "David";

//Ahora por ejemplo queremos que en esta nueva linea queremos hacer cambios en nuestro codigo.
/* eslint-disable*/

const persona = 'Maria' //ESLInt esta desactivado hasta que lo volvamos a activar.

/*eslint-enable*/

const per = "bebe"; // Si no pusieramos punto y coma ya nos daria error.

// Por defecto al instalar ESLint nos extiende de la configuracion recomendada.
// Pero existen plantillas que podemos usar.

// https://www.npmjs.com/search?q=eslint%20-config

const persona3 = "Pepe";

const persona4 = "Maria";

//SI queremos saber los errores que tenemos al ejecutar nuestro archivo, en el json de node, tenemos que hjacer un script
// al que llamamos lint y ponemos lint: "eslint ." EL punto siginifica que va a afectar a toda la carpeta

//Ejecutamos el script, node run lint
// Nos muestra los errores, y pone que se puede arreglar facilmente con otro script, de manera automatica
// Creamos un nuevo script

// Llamado lint-fix: "eslint --fix ."
// Lo ejecutamos npm run lint-fix y nos lo arregla automáticamente.

const pepe = "Pepe";

const abuelo = "";

