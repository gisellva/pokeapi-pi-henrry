import axios from "axios"
export const getPokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((res) => res.data.results)
      .catch((err) => console.log(err));
  };

export  const getPokemondetails=(pokemon)=>{
    return axios.get(pokemon.url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
   }
