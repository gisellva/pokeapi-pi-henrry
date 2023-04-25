const axios = require('axios');

const getpokemonsid=(req, res)=>{
    const { idPokemon } = req.params 
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
   } 
module.exports = getpokemonsid;