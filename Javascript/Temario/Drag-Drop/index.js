const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", evento => { //Inicio de arrastre
            console.log("Arrastro el párrafo : " + parrafo.innerText) //Saca la informacion de texto a partir del HTML
            parrafo.classList.add("dragging") //A la clase parrafo le añado una clase nueva llamada "dragguing"
            evento.dataTransfer.setData("id", parrafo.id)
            const img_fantasma = document.querySelector(".imagen_fantasma") //A partir de ima imagen fasntama que hemos creado en el html, recuperamos su información
            evento.dataTransfer.setDragImage(img_fantasma, 0, 0) // Esta funcion necesita la referencia, el offset en en X y el offset en Y
        })
        parrafo.addEventListener("dragend", () => {
            console.log("He terminado de arrastrar")
            parrafo.classList.remove("dragging")
        })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", evento =>{
        evento.preventDefault()
        // console.log("Drag Over")
        
    })

    seccion.addEventListener("drop" , evento => {
        console.log("Lo suelto")
        const id_parrafo =  evento.dataTransfer.getData("id") //Recupera los datos del id
        // console.log("Parrafo id :" , id_parrafo)
        const parrafo = document.getElementById(id_parrafo) //Recuperamos el id del parrafo
        seccion.appendChild(parrafo) //Aqui le decimos que en la seccion lo ponga como un elemento hijo
    })
})
