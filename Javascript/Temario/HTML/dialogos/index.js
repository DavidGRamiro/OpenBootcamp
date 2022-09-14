const boton = document.querySelector("#btn")
console.log(boton)

boton.addEventListener("click", ()=>{
    // alert("Hizo click");
    // confirm("Estas de acuerdo?") && console.log("Ok")
    // confirm("Estas de acuerdo?")
    // ? console.log("Ok") //Operador alternario. Si es true -> OK 
    // : console.log("NO!") // Si es false -> NO !!

    const respuesta = confirm("¿Seguro?")
    if (respuesta){
        console.log("Estas de acuerdo")
    }else{
        console.log("No estas deacuerdo")
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click",()=>{
    const nombre = prompt("Cual es tu nombre")
    if(nombre){
    console.log("Tu nombre es " + nombre)
    }else{
        console.log("NO has introducido un nombre")
    }
})