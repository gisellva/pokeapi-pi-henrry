import {  SET_ORDER, SET_ORDERATTACK, SET_ORDERZ_A, SET_POKEMOAPI, SET_POKEMONDB, SET_POKEMONS, SET_POKEMONSSERCK, SET_POKEMONSTYPE, SET_POKEMONSTYPERENDER } from "./types";


const initialstate = {
  pokemons: [],
  loading: false,
  types:[]
}

export const pokemonsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
      case SET_POKEMONSSERCK:
        return { ...state, pokemons: [action.payload] };
       
    case SET_ORDER:
      return { ...state, pokemons: state.pokemons.slice().sort((a, b) => a.name.localeCompare(b.name)) }; //utilice el metodo slice para hacer una nuevo array haciendo la copia de los pokemones para asegurarame del cambio 

    case SET_ORDERZ_A:
      return { ...state, pokemons: state.pokemons.slice().sort((a, b) => b.name.localeCompare(a.name)) };

    case SET_ORDERATTACK:
      return {
        ...state,
        pokemons: state.pokemons.slice().sort((a, b) => b.attack- a.attack
        ) 
     };
     case SET_POKEMOAPI:
      return { ...state, pokemons: action.payload };

      case SET_POKEMONDB:
        return { ...state, pokemons: action.payload };

        case SET_POKEMONSTYPE:
          return { ...state, types:action.payload  };

          case  SET_POKEMONSTYPERENDER:
            return { ...state,  pokemons:action.payload  };
 /*/

      case SET_LOADING:
      return { ...state, loading: action.payload };

     
*/
    default:
      return { ...state };
  }
};