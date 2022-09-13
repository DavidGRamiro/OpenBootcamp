//  Metodos mas utilizados con cadenas de caracteres
//  Como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring();
// El primer parámetro que le pasamos a la función es desde donde queremos que empiece a "cortar", y el segundo, hasta donde quiere que llegue el corte.
// Ambos funcionan de la misma manera.

let slice_str = str.slice(0,10);
console.log(slice_str);

let substring_str = str.substring(0,10);
console.log(substring_str);

// Reemplazar parte de una cadena de texto. Pero SOLO el PRIMER caracter que satisface la condición de búsqueda.

let cadena = "Hola mi nombre es David";
console.log(cadena);
console.log(cadena.replace("David","Gorka"));

// SI queremos utilizar el método replace para un texto que sea largo, y nos modifique dicha palabra en todo el texto, tenemos que utilizar el comnado /g (global).

let texto_largo = "A Kaiser y a Sancho le encantan las chuches. Me gustaría saber que tienen esas chuches para que se vuelvan locos con ellas. Kaiser no para de maullarme por que quiere que le de mas chuches de sus preferidas pero no puede ser. Kaiser solo quiere chuches y helado. Kaiser es un listo."

console.log(texto_largo.replace(/Kaiser/g, "Gorda"));


