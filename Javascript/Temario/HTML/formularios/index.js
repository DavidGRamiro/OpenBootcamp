const f = document.getElementById("formulario");
//Recuperamos los datos que hace referencia al formulario.

console.log(f)
// Y lo pasamos por consola

f.addEventListener("submit" ,evento =>{
    console.log(evento)
    evento.preventDefault()
})

// De esta forma, decimos que cuando ocurra el evento submit, prevenga el error por defecto.
// En este caso en vez de darnos error la página, simplemente no haria nada pero no nos daria error.
