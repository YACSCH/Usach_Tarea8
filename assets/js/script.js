let listadoPokemones = document.querySelector("#listadoPokemones");
let url = "https://pokeapi.co/api/v2/pokemon/";

const fetchData = (async () => {
    try {
        for(let i = 1; i <= 20;i++){
            const response = await fetch(url+i)
            const data = await response.json()
            mostrarPokemon(data) 
        }
    } catch (error) {
        console.log(error)
    }
})()


function mostrarPokemon(pokemon) {
    const div = document.createElement("div");
    div.classList.add("pokemon") 
    div.innerHTML = `
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}"/>
            <h2 class="pokemon-nombre">${pokemon.name}</h2>`
    listadoPokemones.append(div)
}
