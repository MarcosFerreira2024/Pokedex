let containerPokemon=document.querySelector('.containerPokemon')
let namePokemon = document.querySelector('[data-name="nomePokemon"]')
let idPokemon =  document.querySelector('[data-id="idPokemon"]')
let typePokemon= document.querySelector('[data-type="typePokemon"]')
let weightPokemon= document.querySelector('[data-weight="weightPokemon"]')
let heightPokemon= document.querySelector('[data-height="heightPokemon"]')
let abilityPokemon= document.querySelector('[data-ability="abilityPokemon"]')
async function pokemon(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let json = await response.json()
    dados(json,pokemon)
}
function dados(json){
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
    document.querySelector('[data-foto="fotoPokemon"] img').setAttribute('src',`${json.sprites.other["official-artwork"].front_default}`)
}

let form = document.querySelector('.containerSearch')
form.addEventListener('submit',searchBar)

function searchBar(e){
    e.preventDefault()
    let search = document.querySelector('[data-search="searchBar"]').value.toLowerCase()
    if (search.trim()!=""){
        pokemon(search)
    }
}

let botaoEsquerdo = document.querySelector('[data-botaoEsquerdo="botao-esquerdo"]')
let botaoDireito = document.querySelector('[data-botaoDireito="botao-direito"]')
botaoEsquerdo.addEventListener('click',diminuirId)
botaoDireito.addEventListener('click',aumentarId)

function aumentarId(){ 
    let idPokemonNumber= +idPokemon.innerHTML
    if (idPokemonNumber<=1025){
    pokemon(idPokemonNumber +1)
    }else{
        console.log('nao existe pokemon com id maior que 1025')
    }

}

function diminuirId(){ 
    let idPokemonNumber= +idPokemon.innerHTML
    if (idPokemonNumber >1){
        pokemon(idPokemonNumber -1)
    }
}
pokemon(1)




