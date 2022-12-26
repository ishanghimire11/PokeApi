const fetchUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
const tableBody = document.getElementById("tableBody")

async function fetchPikachus() {
    try {
        const response = await fetch(fetchUrl);

        const responseJSON = await response.json()
        let pokemons = responseJSON.results
        for (let index = 0; index < pokemons.length; index++) {
            let addingPokemonsOnTable =   `<tr> 
                            <td>${index}</td>
                            <td style="text-transform:capitalize;">${pokemons[index].name}</td>
                            <td><a href="${pokemons[index].url}" target="_blank">${pokemons[index].url}</a></td>

                        </tr>
                        `
            tableBody.innerHTML += addingPokemonsOnTable
        }}
    catch (err) {
            console.log(err)
        }
}

fetchPikachus()

