require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')



//URL de conexión postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);


//Ejecutar la función de los modelos.

FavoriteModel(sequelize);
UserModel(sequelize);

// Relacion modelos 

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through:'user_favorite'});
Favorite.belongsToMany(User, { through:'user_favorite'});


module.exports = {
   User,
   Favorite,
   sequelize,
};
