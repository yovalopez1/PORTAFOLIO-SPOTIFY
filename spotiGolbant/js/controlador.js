import {generarTOKEN} from "./CONSTANTES.js"
import {consumirAPI} from "./servicios.js"
import { pintarCanciones } from "./pintar.js"
let fila = document.getElementById("base")
let artistas = [
    {URI : 'https://api.spotify.com/v1/artists/3IEvQoAohcGX7CdrbtIle7/top-tracks?market=US', IMG : 'img/img_Baby-rasta&Gringo.jpg', nombre: "wisin y yandel"},
    {URI : 'https://api.spotify.com/v1/artists/4SsVbpTthjScTS7U2hmr1X/top-tracks?market=US', IMG : 'img/IMG_Arcangel.jpg', nombre: "arcangel"},
    {URI : 'https://api.spotify.com/v1/artists/4152ZUds7gXsqYQexUonDP/top-tracks?market=US', IMG : 'img/IMG_Grupo-Gale.jpg', nombre: "Grupo Gale"},
    {URI : 'https://api.spotify.com/v1/artists/2EIZodXJHserIu4pGNfD3Z/top-tracks?market=US', IMG : 'img/IMG_Willie-Gonzalez.jpg', nombre: "Willie Gonzalez"},
    {URI : 'https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US', IMG : 'img/Img_Metalleca.png', nombre: "Evanesence"}
]
//4IMAo2UQchVFyPH24PAjUs  21451j1KhjAiaYKflxBjr1  *2ziB7fzrXBoh1HUPS6sVFn
let TOKEN = await generarTOKEN()
let resultado = await consumirAPI(artistas[0].URI, TOKEN)
pintarCanciones(resultado)
let imagen = document.getElementById('imagen')
let botones = document.querySelectorAll(".dropdown-item")
botones.forEach((boton,index)=>{
    boton.addEventListener("click", async function(){
        fila.innerHTML = ""
        resultado = await consumirAPI(artistas[index].URI, TOKEN)
        imagen.src = artistas[index].IMG
        pintarCanciones(resultado)
    })
})


let search = document.getElementById("search")
search.addEventListener("click", async function (){
    artistas.forEach((artista,index)=>{
        seleccionarArtista()
    })
})

// async function seleccionarArtista(){

//     if(artista[index].nombre.toLowerCase() === "wisin y yandel"){
//         fila.innerHTML = ""
//         resultado = await consumirAPI(artistas[index].URI, TOKEN)
//         imagen.src = artistas[index].IMG
//         pintarCanciones(resultado)
//     }else if(artista[index].nombre.toLowerCase() === "arcangel"){
//         fila.innerHTML = ""
//         resultado = await consumirAPI(artistas[index].URI, TOKEN)
//         imagen.src = artistas[index].IMG
//         pintarCanciones(resultado)
//     }else if(artista[index].nombre.toLowerCase() === "Grupo Gale"){
//         fila.innerHTML = ""
//         resultado = await consumirAPI(artistas[index].URI, TOKEN)
//         imagen.src = artistas[index].IMG
//         pintarCanciones(resultado)
//     }else if(artista[index].nombre.toLowerCase() === "Willie Gonzalez"){
//         fila.innerHTML = ""
//         resultado = await consumirAPI(artistas[index].URI, TOKEN)
//         imagen.src = artistas[index].IMG
//         pintarCanciones(resultado)
//     }else if(artista[index].nombre.toLowerCase() === "50 Cent"){
//         fila.innerHTML = ""
//         resultado = await consumirAPI(artistas[index].URI, TOKEN)
//         imagen.src = artistas[index].IMG
//         pintarCanciones(resultado)
//     }
    
// }


