// Dummy Pokemon List
let myPokemons = [
  {
    id: 123123,
    captureAt: "2023-12-20T08:42:17.326Z",
    name: "Pokemon 1",
    type: "Fire",
    health: "Bad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 123123123123131,
    captureAt: "2023-09-05T05:29:32.810Z",
    name: "Pokemon 2",
    type: "Water",
    health: "Good",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
  },
  {
    id: 90901,
    captureAt: "2024-01-10T16:11:44.501Z",
    name: "Pokemon 3",
    type: "Electric",
    health: "Bad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
  },
  {
    id: 9090134343,
    captureAt: "2023-04-25T19:58:10.274Z",
    name: "Pokemon 4",
    type: "Flying",
    health: "Good",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
  },
  {
    id: 909090909,
    captureAt: "2023-06-15T10:37:54.932Z",
    name: "Pokemon 5",
    type: "Ghost",
    health: "Bad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
  },
  {
    id: 9090136666666,
    captureAt: "2023-10-30T22:50:39.615Z",
    name: "Pokemon 6",
    type: "Grass",
    health: "Good",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
  },
  {
    id: 9011111111,
    captureAt: "2023-08-11T12:24:28.736Z",
    name: "Pokemon 7",
    type: "Rock",
    health: "Good",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: 9011145454,
    captureAt: "2023-03-05T06:58:20.903Z",
    name: "Pokemon 8",
    type: "Normal",
    health: "Good",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
  },
];


// This funtion will manage time delay
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// APP
const APP = {
  // Array that will hold data
  myGiftList: [],
  // get Element to add, delete and fulter data
  pokemonElementGift: document.getElementById("pokemon-container-gift"),
  pokemonElementCaptured: document.getElementById("pokemon-container-caputred"),

  // Init will store all the ev listener
  init() {
    APP.getMyPokemonList();
    document.getElementById("send").addEventListener("click", APP.sendGiftList);
    document
      .getElementById("cancel")
      .addEventListener("click", APP.deleteItemGiftList);


  },












  // Here we are going to emulate an htpp req
  async getMyPokemonList() {
    APP.changePokemonContainerContent();
    await pause(2000);
    APP.updatePokemonCapturePokemon();
    //
  },










  updatePokemonCapturePokemon() {


    const elementsToRemove = document.getElementsByClassName("loading");

    
    // Convert HTMLCollection to an array to use forEach
    Array.from(elementsToRemove).forEach((element) => {
      element.remove();
    });



    // Clear the existing content of the <ul> element
    document.getElementById("pokemon-list").innerHTML = "";

    const fragment = document.createDocumentFragment();
    //
    myPokemons.forEach((item) => {
      let newPokemonItem = APP.createPokemonLiElement(item);
      fragment.appendChild(newPokemonItem);
    });
    const ulPokemonContainer = document.getElementById("pokemon-list");
    ulPokemonContainer.append(fragment);
    const addButtons = document.querySelectorAll(".addButton");
    addButtons.forEach((button) => {
      button.addEventListener("click", () => {
        APP.addElementToGiftList(button.id);
      });
    });
  },




  updateGiftPokemon() {

    // Clear the existing content of the container element
    const ulPokemonContainer = document.getElementById("pokemon-list-gift");
    ulPokemonContainer.innerHTML = ""

    // Create new elements and append them
    const fragment = document.createDocumentFragment();
    APP.myGiftList.forEach((item) => {
      let newPokemonItem = APP.createPokemonLiElement(item, true);
      fragment.appendChild(newPokemonItem);
    });
    ulPokemonContainer.append(fragment);
  },

  // filter the pokemon list
  filterPokemonListByHealth() {},
  // Delete Pokemon when user clicks on Cancel Button
  deleteItemGiftList() {
    console.log("Deleted");
  },
  // Send Pokemon List and show confirmation message
  sendGiftList() {
    console.log("Sended");
  },
  addElementToGiftList(elementId) {
    const pokemonFound = myPokemons.find((item) => item.id == elementId);
    APP.myGiftList.push(pokemonFound);
    APP.updateGiftPokemon();
    const updatedPokemonList = myPokemons.filter(
      (item) => item.id != elementId
    );
    myPokemons = updatedPokemonList;
    APP.updatePokemonCapturePokemon();
  },
  // Helper Functions
  changePokemonContainerContent() {

    
    // Show loading indicator
    const loadingIndecator = document.createElement("p");
    const emptyIndicator = document.createElement("p");

    loadingIndecator.innerHTML = "Loading Data...";
    loadingIndecator.classList.add("indicator", "loading");
    APP.pokemonElementCaptured.classList.add("center");
    APP.pokemonElementCaptured.append(loadingIndecator);

  
  },
  createPokemonLiElement(pokemon, isGift) {
    const pokemonElement = document.createElement("li");

    pokemonElement.classList.add("pokemon-element");

    if (isGift) {
      pokemonElement.innerHTML = `
     <div>
        <p>${pokemon.name}</p>
        <p>type : ${pokemon.type}</p>
        <p>helath : ${pokemon.health}</p>
        </div>
            <img
            src="${pokemon.img}"
            alt=""
            />
    `;
    }


    pokemonElement.innerHTML = `
     <div>
        <p>${pokemon.name}</p>
        <p>type : ${pokemon.type}</p>
        <p>helath : ${pokemon.health}</p>
        <button class="addButton" id=${pokemon.id} >Add Pokemon</button>
        </div>
            <img
            src="${pokemon.img}"
            alt=""
            />
    `;


    return pokemonElement;
  },
};

// Wait for doc to load
document.addEventListener("DOMContentLoaded", APP.init);




  // const elementsToRemove = document.getElementsByClassName("empty");
  // // Convert HTMLCollection to an array to use forEach
  // Array.from(elementsToRemove).forEach((element) => {
  //   element.remove();
  // });
    // document.getElementById("pokemon-list-gift").innerHTML = "";