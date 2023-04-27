const { Pokemon } = require('../db');

 async function getpokemonsdb(req, res) {
  try {
    const pokemons = await Pokemon.findAll();
    return res.json(pokemons);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
module.exports=getpokemonsdb