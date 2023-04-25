const { Router } = require('express');
const getpokemons = require('../controllers/getpokemons');
const getpokemonsid = require('../controllers/getpokemonsid');
const router = Router();

router.get('/pokemons', getpokemons);
router.get('/pokemons/:idPokemon', getpokemonsid);

module.exports = router;