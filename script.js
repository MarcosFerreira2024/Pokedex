async function pokemon(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let json = await response.json()
    dados(json)
}


pokemon(1)




