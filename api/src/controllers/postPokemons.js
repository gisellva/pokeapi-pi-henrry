const {Pokemon} = require('../db');
const postPokemons=async(req , res)=>{
    try {
    const {name,image,hp, attack, defense,speed, height,weigh }=req.body
   const newpokemon=await Pokemon.create({name:name, image,hp, attack, defense,speed, height,weigh })
    res.status(200).json(newpokemon)
  } catch (error) {
    
    res.status(404).send(error.message)
  }
}
module.exports = postPokemons;