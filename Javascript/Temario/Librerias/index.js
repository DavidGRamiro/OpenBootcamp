// Instalamos axion para hacer llamadas a servicios externos.
// Una vez que hayamos importado la libreria de axion, hemos copiado el código para poder utilizarla.
// Hemos elegido una API que nos da una direccion URL que tenemos que copiar y pegar en el metodo get de axios
// Despues hacemos un npm start y nos concecta con la API de POkemon en este caso y nos devuelve los datos de esta llamada a esa API

import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/ditto') // <--
  .then(function (response) {
    // handle success
    console.log("Permitido !!")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("ERRORRRRR !!!!!")
    console.log(error);
  })

  // Recurso !!!!!!!!
  // TOP 20 LIBRERIAS JAVASCRIPT

//   https://hackr.io/blog/top-javascript-libraries