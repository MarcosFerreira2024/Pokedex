async function pokemon(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let json = await response.json()
    dados(json)
}
function dados(json){
    let containerPokemon=document.querySelector('.containerPokemon')
    let namePokemon = document.querySelector('[data-name="nomePokemon"]')
    let idPokemon =  document.querySelector('[data-id="idPokemon"]')
    let typePokemon= document.querySelector('[data-type="typePokemon"]')
    let weightPokemon= document.querySelector('[data-weight="weightPokemon"]')
    let heightPokemon= document.querySelector('[data-height="heightPokemon"]')
    let abilityPokemon= document.querySelector('[data-ability="abilityPokemon"]')
    typePokemon.innerHTML=json.types[0].type.name
    switch (json.types[0].type.name) {
        case "normal":
            typePokemon.style.backgroundColor = "gray";
            containerPokemon.style.backgroundColor = "gray";
            break;
        case "fighting":
            typePokemon.style.backgroundColor = "brown";
            containerPokemon.style.backgroundColor = "brown";
            break;
        case "flying":
            typePokemon.style.backgroundColor = "skyblue";
            containerPokemon.style.backgroundColor = "skyblue";
            break;
        case "poison":
            typePokemon.style.backgroundColor = "purple";
            containerPokemon.style.backgroundColor = "purple";
            break;
        case "ground":
            typePokemon.style.backgroundColor = "tan";
            containerPokemon.style.backgroundColor = "tan";
            break;
        case "rock":
            typePokemon.style.backgroundColor = "gray";
            containerPokemon.style.backgroundColor = "gray";
            break;
        case "bug":
            typePokemon.style.backgroundColor = "lime";
            containerPokemon.style.backgroundColor = "lime";
            break;
        case "ghost":
            typePokemon.style.backgroundColor = "purple";
            containerPokemon.style.backgroundColor = "purple";
            break;
        case "steel":
            typePokemon.style.backgroundColor = "silver";
            containerPokemon.style.backgroundColor = "silver";
            break;
        case "fire":
            typePokemon.style.backgroundColor = "red";
            containerPokemon.style.backgroundColor = "red";
            break;
        case "water":
            typePokemon.style.backgroundColor = "blue";
            containerPokemon.style.backgroundColor = "blue";
            break;
        case "grass":
            typePokemon.style.backgroundColor = "green";
            containerPokemon.style.backgroundColor = "green";
            break;
        case "electric":
            typePokemon.style.backgroundColor = "yellow";
            containerPokemon.style.backgroundColor = "yellow";
            break;
        case "psychic":
            typePokemon.style.backgroundColor = "pink";
            containerPokemon.style.backgroundColor = "pink";
            break;
        case "ice":
            typePokemon.style.backgroundColor = "lightblue";
            containerPokemon.style.backgroundColor = "lightblue";
            break;
        case "dragon":
            typePokemon.style.backgroundColor = "purple";
            containerPokemon.style.backgroundColor = "purple";
            break;
        case "dark":
            typePokemon.style.backgroundColor = "black";
            containerPokemon.style.backgroundColor = "black";
            break;
        case "fairy":
            typePokemon.style.backgroundColor = "pink";
            containerPokemon.style.backgroundColor = "pink";
            break;
        default:
            typePokemon.style.backgroundColor = "white";
            containerPokemon.style.backgroundColor = "white";
            break;
    }
    idPokemon.innerHTML=json.id
    namePokemon.innerHTML=json.species.name
    weightPokemon.innerHTML=`${json.weight/10} kg`
    heightPokemon.innerHTML=`${json.height/10} m`
    abilityPokemon.innerHTML=json.abilities[0].ability.name
}

pokemon(1)




