export function pintarCanciones(resultado){
    console.log(resultado)
    let base = document.getElementById("base")

    resultado.tracks.forEach((tracks,index) => {
            
       
        let fila = document.createElement("div")
        fila.classList.add("flexy")

        let ind = document.createElement("h5")
        
        ind.textContent = index + 1

        let imagen=document.createElement("img")
        imagen.height = tracks.album.images[2].height
        imagen.width = tracks.album.images[2].width
        imagen.src=tracks.album.images[0].url
        
        let nombrecancion=document.createElement("h2")
        nombrecancion.textContent=tracks.name

        let audio = document.createElement("audio")
        audio.id = 'audio-player'
        audio.src = tracks.preview_url
        audio.type = tracks.type
        audio.setAttribute("controls","controls")

        //padres e hijos
        fila.appendChild(ind)
        fila.appendChild(imagen)
        fila.appendChild(nombrecancion)
        fila.appendChild(audio)
      
        base.appendChild(fila)

        // console.log(tracks.name)
        // console.log(tracks.preview_url)
        // console.log(tracks.album.images[0].url)
    });
    
    // .catch(function(respuesta){ //mostrar el error de la promesa
    // console.log("Upsss..."+respuesta)
    // })

    // FUNCION PINTAR
    // Funcion encargada de recorrer los datos y pintalos en pantalla
//     function pintarCanciones(tracks){
//         console.log('estamos pintando')
//         console.log(tracks)
//     }
}

    