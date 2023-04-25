import { SET_LOADING, SET_ORDER, SET_ORDERZ_A, SET_POKEMONS, SET_POKEMONSSERCK,SET_ORDERATTACK, SET_POKEMONSTYPE } from "./types";


const initialstate = {
  pokemons: [],
  loading: false,
}

export const pokemonsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case SET_POKEMONSSERCK:
      return { ...state, pokemons: [action.payload] };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_ORDER:
      return { ...state, pokemons: state.pokemons.slice().sort((a, b) => a.name.localeCompare(b.name)) }; //utilice el metodo slice para hacer una nuevo array haciendo la copia de los pokemones para asegurarame del cambio 

    case SET_ORDERZ_A:
      return { ...state, pokemons: state.pokemons.slice().sort((a, b) => b.name.localeCompare(a.name)) };

    case SET_ORDERATTACK:
      return {
        ...state,
        pokemons: state.pokemons.slice().sort((a, b) => b.stats[1].base_stat - a.stats[1].base_stat) 
     };

     case SET_POKEMONSTYPE:
      return { ...state,pokemons:action.payload  };

    default:
      return { ...state };
  }
};