const f = document.getElementById("titulo")
console.log(f)

// $("li").hide() La forma de trabajar con JQuery es con el simbolo del dolar y los parentesis haciendo referencia
// a lo que nos queremos referir. En este ejemplo queremos ocultar la lista.

$(document).ready(()=>{
    //Los selectores: ID -> #li1
    // Por clase : . -> .clase

    $(".oculto").click(()=>{
        console.log("Ocultando...")
        // $("h1").hide() // Con la opcion de hide, es un cambio brusco
        $("h1").fadeOut() // Con fadeOut o fadeIn hace un efecto de desvacenimiento
    })
    $(".mostrar").click(()=>{
        console.log("Mostrando...")
        $("h1").show()
    })
    $("li").click(()=>{         //De esta forma, cada vez que hagamos click en un elemento l1, nos cambiara el color a azul el h1.
        $("h1").css({color: "blue"})
    })
    $(".new-element").click(()=>{
        // $("ul").append("<li>Nuevo Elemento</li>") // Añade el elemento al final de la lista.
        $("ul").prepend("<li>Nuevo Elemento</li>") // Añade el elemento al principio de la lista.
    })
    $("li").mouseenter((elem)=>{    //Cuando el mouse pase por encima de un elemento h1 se pondra de color rojo
        elem.target.style.color = "red"
    })
    $("li").mouseleave((elem)=>{    //Cuando el mouse salga de ese elemento li, volverá a ponerse en color negro
        elem.target.style.color = "black"
    })

})