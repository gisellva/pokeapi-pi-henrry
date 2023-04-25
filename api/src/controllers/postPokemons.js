const {Pokemon,Type} = require('../db');

const postPokemons=async(req , res)=>{
  try {
    const { name, image, hp, attack, defense, speed, height, weight, type } = req.body;

    // Crear un nuevo Pokémon
    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    });

    // Asociar uno o varios tipos existentes al Pokémon
   
      const typesToAdd = await Type.findOne({ where: { name: type } });
      await newPokemon.addTypes([typesToAdd]);
    
   console.log(type);
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = postPokemons;