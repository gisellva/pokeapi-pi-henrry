import {  SET_ORDER, SET_ORDERATTACK, SET_ORDERZ_A, SET_POKEMOAPI, SET_POKEMONDB, SET_POKEMONS, SET_POKEMONSSERCK, SET_POKEMONSTYPE, SET_POKEMONSTYPERENDER, } from "./types";
import {getPokemondetails, getpokemonestype} from "./api"

//*actions sincronas

export const setpokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
});
export const fetchPokemon = pokemon => {
  return dispatch => {
    fetch(`http://localhost:3001/pokemons/name?name=${pokemon}`)
      .then(res => res.json())
      .then(data =>
        dispatch({ type :SET_POKEMONSSERCK, payload: data })
      )
      .catch(error => console.log("error"));
  };
};
 

export const orderA_Z=()=>({
  type:SET_ORDER,
  
})
export const orderZ_A=()=>({
  type:SET_ORDERZ_A,
  
})
export const filterByAttack = () => ({
  type:SET_ORDERATTACK
});
export const filterorigenapi = (payload) => ({
  type:SET_POKEMOAPI,
  payload
});
export const filterorigendb = (payload) => ({
  type:SET_POKEMONDB,
  payload
});

export const setPokemonstype = (payload) => ({
  type:SET_POKEMONSTYPE,
  payload
});

 export const setpokemonstyperender=(payload)=>({
  type:SET_POKEMONSTYPERENDER,
  payload
 })


export const fechpokemonstype=(type)=>async(dispach)=>{
  try {
    const respone = await getpokemonestype(type);
    const pokemons = respone.pokemon.map((poke) => poke.pokemon);
    const pokemontypedetails = await Promise.all(pokemons.map(pokeurl => getPokemondetails(pokeurl)));
    
    // Crear un array vacío para almacenar los detalles de los Pokemon
    const pokemonDetailsArray = [];
    
    // Iterar a través de cada objeto Pokemon devuelto por getPokemondetails y agregarlo al array
    pokemontypedetails.forEach((pokemon) => {
      pokemonDetailsArray.push({
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        height: pokemon.height,
        hp: pokemon.stats[0].base_stat,
        id: pokemon.id,
        image:pokemon.sprites.other.home.front_default,
        name: pokemon.name,
        speed: pokemon.stats[5].base_stat,
        type: pokemon.types.map((type) => type.type.name),
        weight: pokemon.weight,
      });
    });

    dispach(setpokemonstyperender(pokemonDetailsArray));
  } catch (error) {
    console.log(error);
  }
}