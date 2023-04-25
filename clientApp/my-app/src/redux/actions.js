import { SET_LOADING, SET_ORDER, SET_ORDERZ_A, SET_POKEMONS, SET_POKEMONSSERCK,SET_SHOW,SET_ORDERATTACK, SET_POKEMONSTYPE } from "./types";
import {getPokemondetails, getpokemonestype} from "./api"

//*actions sincronas

export const setpokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
});
  
export const setloading=(payload)=>({
   type: SET_LOADING,
   payload
})
export const setShowMenu=(payload)=>({
  type:SET_SHOW,
  payload
})
export const orderA_Z=()=>({
  type:SET_ORDER,
  
})
export const orderZ_A=()=>({
  type:SET_ORDERZ_A,
  
})
export const filterByAttack = () => ({
  type:SET_ORDERATTACK
});
export const setPokemonstype = (payload) => ({
  type:SET_POKEMONSTYPE,
  payload
});
//*actions asincronas
//la accion des dispach permite llegar al redcuder 
 export const getpokemonsDetailaction=(pokemons=[])=>async(dispach)=>{
    const pokemondetailoaction =await Promise.all(pokemons.map(pok=>getPokemondetails(pok)))
   
    dispach(setpokemons( pokemondetailoaction))
}  

export const fetchPokemon = pokemon => {
    return dispatch => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(data =>
          dispatch({ type :SET_POKEMONSSERCK, payload: data })
        )
        .catch(error => console.log("error"));
    };
};

export const fechpokemonstype=(type)=>async(dispach)=>{
  try {
    const respone=await getpokemonestype(type)
    const pokemons =respone.pokemon.map((poke)=>poke.pokemon)
    const pokemontypedetails=await  Promise.all( pokemons.map(pokeurl=>getPokemondetails(pokeurl)))
    dispach(setPokemonstype(pokemontypedetails))
  } catch (error) {
    console.log(error);
  }
}