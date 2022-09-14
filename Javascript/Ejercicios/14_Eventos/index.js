const a = document.getElementById("botonera");
console.log(a);

a.addEventListener("click",()=>{
    console.log("Click en el botón");
})

$(document).ready(()=>{
    $("#botonera").click(()=>{
        console.log("Hola, estoy utilizando JQuery")
    })
})