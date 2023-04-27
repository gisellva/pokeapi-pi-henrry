const { Router } = require('express');
const getpokemons = require('../controllers/getPokemons');
const getpokemonsid = require('../controllers/getpokemonsid');
const getPokemonsName = require('../controllers/getPokemonsName');
const postPokemons = require('../controllers/postPokemons');
const getalltypes = require('../controllers/getpokemonstype');
const getpokemonsdb = require('../controllers/getdb');


const router = Router();

router.get('/pokemons', getpokemons);
router.get('/pokemons/name',getPokemonsName);
router.get('/pokemons/:id', getpokemonsid);
router.post('/pokemons',postPokemons)
router.get('/types', getalltypes)
router.get('/pokemonsdb', getpokemonsdb)


module.exports = router;