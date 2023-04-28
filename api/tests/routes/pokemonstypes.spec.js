const session = require('supertest-session');
const app = require('../../src/app');
const { Type, comn } = require('../../src/db');
const axios = require('axios');

const agent = session(app);

describe('Types routes', () => {
  before(() => comn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  beforeEach(async () => {
    await Type.sync({ force: true });
    await axios.get('https://pokeapi.co/api/v2/type')
      .then((response) => {
        const types = response.data.results;
        types.forEach(async (type) => {
          await Type.create({ name: type.name });
        });
      })
      .catch((error) => console.log(error));
  });

  describe('GET /types', () => {
    it('should get 200', () =>
      agent.get('/types').expect(200)
    );
  });
});