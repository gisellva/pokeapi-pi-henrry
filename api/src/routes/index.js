const { Router } = require('express');
const getpokemons = require('../controllers/getpokemons');
const getpokemonsid = require('../controllers/getpokemonsid');
const getPokemonsName = require('../controllers/getPokemonsName');
const postPokemons = require('../controllers/postPokemons');
const getalltypes = require('../controllers/getpokemonstype');
const router = Router();

router.get('/pokemons', getpokemons);
router.get('/pokemons/:idPokemon', getpokemonsid);
router.get('/pokemons/name',getPokemonsName);
router.post('/pokemons',postPokemons)
router.get('/types', getalltypes)
module.exports = router;