// import { PARAMETROS_PETICION } from "./CONSTANTES.js";
// export async function consumirAPI(URI){
//     let respuesta = await fetch(URI,PARAMETROS_PETICION)
//     let cansiones = respuesta.json()
//     return cansiones
// }

export async function consumirAPI(URI,GenerarTOKEN){
    
    let paramatros = {
        method: "GET",
        headers: { Authorization: GenerarTOKEN }
    }
    let respuesta = await fetch(URI, await paramatros)
    let cansiones = respuesta.json()
    return cansiones
}




