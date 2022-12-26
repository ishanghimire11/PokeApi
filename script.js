const fetchUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
const tableBody = document.getElementById("tableBody")
const searchInput = document.getElementById("searchInput")
const tr = tableBody.getElementsByTagName("tr")
const pikachuNameDes = document.getElementById("pikachuNameDes")
const pikachuNameAs = document.getElementById("pikachuNameAs")
const pikachuIdAs = document.getElementById("id-as")
const pikachuIdDes = document.getElementById("id-des")

let pokemons = []
let pokemonsArr = []



async function fetchPikachus() {
    try {
        const response = await fetch(fetchUrl);

        const responseJSON = await response.json()
        let pokemons = await responseJSON.results
        pokemonId = 1
        for (let pokemon of pokemons) {
            pokemonsArr.push({ 'pokemonId': pokemonId, 'pokemonName': pokemon.name, 'pokemonURL': pokemon.url })
            pokemonId += 1
        }
        for (let pokemon of pokemonsArr) {
            let addingPokemonsOnTable = `<tr> 
                                    <td>${pokemon.pokemonId}</td>
                                    <td style="text-transform:uppercase;"> ${pokemon.pokemonName} 
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${pokemon.pokemonId}.png" class="pikachuImage"  /> </td>
                                    <td><a href="${pokemon.pokemonURL}" target="_blank">${pokemon.pokemonURL}</a></td>
                                    <td><i class="fa-solid fa-trash-can trash"  id="${pokemon.pokemonId}"></i></td>
                                </tr>`
                tableBody.innerHTML += addingPokemonsOnTable
        
            let  deleteIcon= document.querySelectorAll('.trash')

            deleteIcon.forEach((delbtn) => {
                delbtn.addEventListener('click', () => {
                    let delelmnt= delbtn.parentElement,
                        delelmnt2= delelmnt.parentElement

                    let l = pokemonsArr.findIndex((elem) => {
                        return elem.pokemonId === parseInt(delbtn.id)
                    })

                    if (confirm(`do you want to delete the pokemon ${pokemonsArr[l].pokemonName.toUpperCase()}?`)){
                        pokemonsArr.splice(l,1)
                        delelmnt2.remove()
                        alert("Deleted!")
                } 
                    
                })
            })
        }

        /* ----------------------------- CONFIRM BOX DELETE ---------------------------------------- */ 
        
        
        

        /* ----------------------------  SORTING BY NAME  -------------------------------------------- */

        const handleSortPokemonAs = () => {
            let namesort = pokemonsArr.sort((a, b) => {

                if (a.pokemonName.toLowerCase() < b.pokemonName.toLowerCase()
                ) return -1 
                if (a.pokemonName.toLowerCase() > b.pokemonName.toLowerCase()
                ) return 1;
                return 0
            })
            console.log(namesort)
            tableBody.innerHTML = " "
            for (let pokemon of namesort) {

                let addingPokemonsOnTable = `<tr> 
                                    <td>${pokemon.pokemonId}</td>
                                    <td style="text-transform:uppercase;"> ${pokemon.pokemonName} 
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${pokemon.pokemonId}.png" class="pikachuImage"  /> </td>
                                    <td><a href="${pokemon.pokemonURL}" target="_blank">${pokemon.pokemonURL}</a></td>
                                    <td><i class="fa-solid fa-trash-can trash"  id="${pokemon.pokemonId}"></i></td>
                                </tr>`
                tableBody.innerHTML += addingPokemonsOnTable
            }
            let  deleteIcon= document.querySelectorAll('.trash')

            deleteIcon.forEach((delbtn) => {
                delbtn.addEventListener('click', () => {
                    let delelmnt= delbtn.parentElement,
                        delelmnt2= delelmnt.parentElement

                    let l = pokemonsArr.findIndex((elem) => {
                        return elem.pokemonId === parseInt(delbtn.id)
                    })

                    if (confirm(`do you want to delete the pokemon ${pokemonsArr[l].pokemonName.toUpperCase()}?`)){
                        pokemonsArr.splice(l,1)
                        delelmnt2.remove()
                        alert("Deleted!")
                } 
                })
            })
        }
        const handleSortPokemonDes = () => {
            let namesort = pokemonsArr.sort((a, b) => {

                if (a.pokemonName.toLowerCase() < b.pokemonName.toLowerCase()
                ) return 1;
                if (a.pokemonName.toLowerCase() > b.pokemonName.toLowerCase()
                ) return -1;
                return 0
            })
            console.log(namesort)
            tableBody.innerHTML = " "
            for (let pokemon of namesort) {

                let addingPokemonsOnTable = `<tr> 
                                    <td>${pokemon.pokemonId}</td>
                                    <td style="text-transform:uppercase;"> ${pokemon.pokemonName} 
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${pokemon.pokemonId}.png" class="pikachuImage"  /> </td>
                                    <td><a href="${pokemon.pokemonURL}" target="_blank">${pokemon.pokemonURL}</a></td>
                                    <td><i class="fa-solid fa-trash-can trash"  id="${pokemon.pokemonId}"></i></td>
                                </tr>`
                tableBody.innerHTML += addingPokemonsOnTable
            }
            let  deleteIcon= document.querySelectorAll('.trash')

            deleteIcon.forEach((delbtn) => {
                delbtn.addEventListener('click', () => {
                    let delelmnt= delbtn.parentElement,
                        delelmnt2= delelmnt.parentElement

                    let l = pokemonsArr.findIndex((elem) => {
                        return elem.pokemonId === parseInt(delbtn.id)
                    })
                    

                    

                    if (confirm(`do you want to delete the pokemon ${pokemonsArr[l].pokemonName.toUpperCase()}?`)){
                            pokemonsArr.splice(l,1)
                            delelmnt2.remove()
                            alert("Deleted!")
                    } 
                    
                    
                })
            })
        }


        pikachuNameAs.addEventListener('click', handleSortPokemonDes)
        pikachuNameDes.addEventListener('click', handleSortPokemonAs)




        /* ------------------------------------- SORTING BY INDEX NUMBER  ---------------------------------- */

        const handleSortIdAs = () => {
            let pokemonidAss = pokemonsArr.sort((a, b) => {
                return a.pokemonId - b.pokemonId
            })
            tableBody.innerHTML = " "
            for (let pokemon of pokemonidAss) {

                let addingPokemonsOnTable = `<tr> 
                                    <td>${pokemon.pokemonId}</td>
                                    <td style="text-transform:uppercase;"> ${pokemon.pokemonName} 
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${pokemon.pokemonId}.png" class="pikachuImage"  /> </td>
                                    <td><a href="${pokemon.pokemonURL}" target="_blank">${pokemon.pokemonURL}</a></td>
                                    <td><i class="fa-solid fa-trash-can trash"  id="${pokemon.pokemonId}"></i></td>
                                </tr>`
                tableBody.innerHTML += addingPokemonsOnTable
            }
        
            /* ---------------------------- FOR DELETE --------------------------------- */ 
            let  deleteIcon= document.querySelectorAll('.trash')

            deleteIcon.forEach((delbtn) => {
                delbtn.addEventListener('click', () => {
                    let delelmnt= delbtn.parentElement,
                        delelmnt2= delelmnt.parentElement

                    let l = pokemonsArr.findIndex((elem) => {
                        return elem.pokemonId === parseInt(delbtn.id)
                    })

                    if (confirm(`do you want to delete the pokemon ${pokemonsArr[l].pokemonName.toUpperCase()}?`)){
                        pokemonsArr.splice(l,1)
                        delelmnt2.remove()
                        alert("Deleted!")
                } 
                })
            })
        }
        
        

        const handleSortIdDes = () => {
            let pokemonidDess = pokemonsArr.sort((a, b) => {
                return b.pokemonId - a.pokemonId
            })
            tableBody.innerHTML = " "
            for (let pokemon of pokemonidDess) {

                let addingPokemonsOnTable = `<tr> 
                                    <td>${pokemon.pokemonId}</td>
                                    <td style="text-transform:uppercase;"> ${pokemon.pokemonName} 
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${pokemon.pokemonId}.png" class="pikachuImage"  /> </td>
                                    <td><a href="${pokemon.pokemonURL}" target="_blank">${pokemon.pokemonURL}</a></td>
                                    <td><i class="fa-solid fa-trash-can trash"  id="${pokemon.pokemonId}"></i></td>
                                </tr>`
                tableBody.innerHTML += addingPokemonsOnTable
            }
            let  deleteIcon= document.querySelectorAll('.trash')

            deleteIcon.forEach((delbtn) => {
                delbtn.addEventListener('click', () => {
                    let delelmnt= delbtn.parentElement,
                        delelmnt2= delelmnt.parentElement

                    let l = pokemonsArr.findIndex((elem) => {
                        return elem.pokemonId === parseInt(delbtn.id)
                    })

                    if (confirm(`do you want to delete the pokemon ${pokemonsArr[l].pokemonName.toUpperCase()}?`)){
                        pokemonsArr.splice(l,1)
                        delelmnt2.remove()
                        alert("Deleted!")
                } 
                })
            })
        }



        pikachuIdAs.addEventListener('click', handleSortIdAs)
        pikachuIdDes.addEventListener('click', handleSortIdDes)

    }
    catch (err) {
        console.log(err)
    }



    searchInput.addEventListener('input', () => {
        const filtered = pokemonsArr.filter((searchPoke) => {
            return searchPoke.pokemonName.includes(searchInput.value.toLowerCase())
        })

        tableBody.innerHTML = " "
        for (let pokemon of filtered) {

            let addingPokemonsOnTable = `<tr> 
                                    <td>${pokemon.pokemonId}</td>
                                    <td style="text-transform:uppercase;"> ${pokemon.pokemonName} 
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${pokemon.pokemonId}.png" class="pikachuImage"  /> </td>
                                    <td><a href="${pokemon.pokemonURL}" target="_blank">${pokemon.pokemonURL}</a></td>
                                    <td><i class="fa-solid fa-trash-can trash"  id="${pokemon.pokemonId}"></i></td>
                                </tr>`
                tableBody.innerHTML += addingPokemonsOnTable
        }
        let  deleteIcon= document.querySelectorAll('.trash')

            deleteIcon.forEach((delbtn) => {
                delbtn.addEventListener('click', () => {
                    let delelmnt= delbtn.parentElement,
                        delelmnt2= delelmnt.parentElement

                    let l = pokemonsArr.findIndex((elem) => {
                        return elem.pokemonId === parseInt(delbtn.id)
                    })

                    if (confirm(`do you want to delete the pokemon ${pokemonsArr[l].pokemonName.toUpperCase()}?`)){
                        pokemonsArr.splice(l,1)
                        delelmnt2.remove()
                        alert("Deleted!")
                } 
                })
            })
    })

}


fetchPikachus()


