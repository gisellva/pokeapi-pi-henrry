const axios = require('axios');
const { Type } = require('../db');

const getalltypes = async (req, res) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      const types = response.data.results;
      const newTypes = [];
  
      for (const type of types) {
        const foundType = await Type.findOne({ where: { name: type.name } });
        if (!foundType) {
          // Si el tipo no existe en la base de datos, crea un nuevo registro
          const createdType = await Type.create({ name: type.name });
          newTypes.push(createdType);
        }
      }
  
      // Obtener todos los tipos de la base de datos
      const allTypes = await Type.findAll();
  
      // Enviar la respuesta con todos los tipos
      res.status(200).json(allTypes);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

module.exports=getalltypes