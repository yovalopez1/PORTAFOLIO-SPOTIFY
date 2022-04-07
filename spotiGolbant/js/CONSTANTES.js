
export async function generarTOKEN(){
    let URI = "https://accounts.spotify.com/api/token"

    let client_id = "client_id=63067bf38fbe46b580ffc91302405894"
    let client_secret = "client_secret=521c1238ee234e7ab36ecc1af897811c"
    let grant_type = "grant_type=client_credentials"

    let paramatros = {
        method: "POST",
        headers: {"content-type":"application/x-www-form-urlencoded"},
        body: `${client_id}&${client_secret}&${grant_type}`
    }

    let respuesta = await fetch(URI, paramatros)
    let respuestjson = await respuesta.json()
    let token = (`${respuestjson.token_type} ${respuestjson.access_token}`)
    return(token)
}