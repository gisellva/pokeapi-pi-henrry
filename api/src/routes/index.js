const { Router } = require('express');
const getpokemons = require('../controllers/getpokemons');
const getpokemonsid = require('../controllers/getpokemonsid');
const getPokemonsName = require('../controllers/getPokemonsName');
const router = Router();

router.get('/pokemons', getpokemons);
router.get('/pokemons/:idPokemon', getpokemonsid);
router.get('/pokemons/name',getPokemonsName);


module.exports = router;