const axios = require('axios');
const {Pokemon} = require('../db');
const getPokemonsName=async(req, res)=>{
  const { name } = req.query;
  
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = {
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
    return res.json(pokemon);
  } catch (error) {
    const pokemon = await Pokemon.findOne({ where: { name } });
    if (pokemon) {
      return res.json(pokemon);
    } else {
      return res.status(404).json({ message: 'el pokemon no existe' });
    }
  }
   } 
module.exports = getPokemonsName;