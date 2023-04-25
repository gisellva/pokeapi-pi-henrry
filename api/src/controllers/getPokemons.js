const axios = require('axios');

const getpokemons = (req, res) => {
  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
};

module.exports = getpokemons;