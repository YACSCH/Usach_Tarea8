let listadoPersonajes = document.querySelector("#listadoPersonajes");
let url = "https://rickandmortyapi.com/api/character";

class Character {
    constructor(name, species, image) {
      this._name = name;
      this._species = species;
      this._image = image;
    }
  
    get name() {
      return this._name;
    }
  
    get species() {
      return this._species;
    }
  
    get image() {
      return this._image;
    }
  
    renderizarPersonajes() {

    const div = document.createElement("div");
      div.classList.add("personaje") 
      div.innerHTML = `
              <img src="${this.image}" alt=""/>
              <h2 class="personaje-nombre">${this.name}</h2>
              <h3 class="personaje-especie">${this.species}</h3>`

      listadoPersonajes.append(div)
    }
  }
  
  async function fetchPersonajes() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const characters = data.results;
  
      characters.forEach(character => {
        const { name, species, image } = character;
        const newCharacter = new Character(name, species, image);
        newCharacter.renderizarPersonajes();
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchPersonajes();
  