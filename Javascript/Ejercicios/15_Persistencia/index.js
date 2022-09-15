

let nombre = "David";
let apellido = "González";

let persona = {
    nombre: "David",
    apellido: "Gonzalez"
}

sessionStorage.setItem("objeto", JSON.stringify(persona))

localStorage.setItem("objeto2", JSON.stringify(persona))

document.cookie = "nombre-cookie=Davidcookie"
// document.cookie = "nombre-cookie=Davidcookie;expires=" + new Date().toUTCString();