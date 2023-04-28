/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, comn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
  image: 'https://pokeapi.co/api/v2/pokemon/25.png',
  hp: 35,
  attack: 55,
  defense: 40,
  attack: 49,
  height: 7,
  speed: 45,
  type:"electric"

};

describe('Pokemon routes', () => {
  before(() =>comn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
});
