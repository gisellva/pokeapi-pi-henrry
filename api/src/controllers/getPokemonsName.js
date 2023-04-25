const axios = require('axios');

const getPokemonsName=(req, res)=>{
    const { name } = req.name
    axios.get(`https://pokeapi.co/api/v2/pokemon/${ name}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
   } 
module.exports = getPokemonsName;