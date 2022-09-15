//Trabajar con LOCAL STORAGE
//Esta información si estará en el resto de pestañas

localStorage.setItem("nombre","David")

localStorage.setItem("persona", JSON.stringify({ nombre:"David", edad: 28}))

console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.strigify convierte un objeto u array en String
//JSON.parse convierte un objeto u array convertido a traves de stringify en un objeto de Javascript

localStorage.removeItem("persona"); //Para borrar un item

//Trabajar con el SESION STORAGE.
//Esta informacion no estará en el resto de pestañas

sessionStorage.setItem("nombre-sesion","David");

//COOKIES
//Crear una cookie
document.cookie = "nombreCookie=Davidcookie"
//Controlar la coducidad de una cookie
document.cookie = "nombre-caducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie)
