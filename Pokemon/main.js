// Dummy Pokemon List
const myPokemons = [
  {
    captureAt: "2023-12-20T08:42:17.326Z",
    name: "Pokemon 1",
    type: "Fire",
    health: "Bad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    captureAt: "2023-09-05T05:29:32.810Z",
    name: "Pokemon 2",
    type: "Water",
    health: "Good",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
  },
  {
    captureAt: "2024-01-10T16:11:44.501Z",
    name: "Pokemon 3",
    type: "Electric",
    health: "Bad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
  },
  {
    captureAt: "2023-04-25T19:58:10.274Z",
    name: "Pokemon 4",
    type: "Flying",
    health: "Good",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
  },
  {
    captureAt: "2023-06-15T10:37:54.932Z",
    name: "Pokemon 5",
    type: "Ghost",
    health: "Bad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
  },
  {
    captureAt: "2023-10-30T22:50:39.615Z",
    name: "Pokemon 6",
    type: "Grass",
    health: "Good",
    img: "",
  },
  {
    captureAt: "2023-08-11T12:24:28.736Z",
    name: "Pokemon 7",
    type: "Rock",
    health: "Good",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
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
  // Init will store all the ev listener 
  init() {
    console.log(myPokemons);
  },
  // Array that will hold data 
  myGiftList : [],
  mycapturedPokemonList : [],

  // Here we are going to emulate an htpp req 
  async getMyPokemonList() {
    await pause(5000)
  },
  // Delete Pokemon when user clicks on Cancel Button
  deleteItemGiftList(){

  },
  // Send Pokemon List and show confirmation message
  sendGiftList(){

  }

};

// Wait for doc to load
document.addEventListener("DOMContentLoaded", APP.init);
