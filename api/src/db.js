require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME } = process.env;

const PokemonsModule=require("./models/Pokemon")
const TypesModule=require("./models/type")

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${ DB_HOST}/${DB_NAME}`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);

//definicion de tablas
PokemonsModule(sequelize)
TypesModule(sequelize)

const {Pokemon , Type}=sequelize.models
Pokemon.belongsToMany(Type , { through: 'Pokemon_Type' })
Type.belongsToMany(Pokemon ,{ through: 'Pokemon_Type' })
module.exports = {
  ...sequelize.models,
  comn:sequelize};
