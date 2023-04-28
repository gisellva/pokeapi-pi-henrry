const axios = require('axios');

const getpokemons = async(req, res) => {
  
  try {
   
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
 
    const pokemons = response.data.results;
    const pokemonData = await Promise.all(
      pokemons.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other.home.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          speed: response.data.stats[5].base_stat,
          height: response.data.height,
          weight: response.data.weight,
          type: response.data.types.map(type => type.type.name),
         };
      })
    );
    return res.status(200).json(pokemonData);
   
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }

};

module.exports = getpokemons;