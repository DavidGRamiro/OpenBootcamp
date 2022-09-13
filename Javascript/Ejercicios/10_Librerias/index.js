
import chalk from "chalk";
import { suma, multiplica } from "./Modulo_/controller.js";

const sum = suma(5,10);
console.log(sum);

const multi = multiplica(5,5);
console.log(multi);

let mensaje = "Hemos importado la libreria chalk"
console.log(chalk.green(mensaje));
