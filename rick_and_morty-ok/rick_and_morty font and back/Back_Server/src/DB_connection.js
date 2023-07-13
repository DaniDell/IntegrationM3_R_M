require("dotenv").config();
const { Sequelize } = require('sequelize');
const { DB_USERNAME, DB_PASSWORD, DB_HOST, PORT, DB } = process.env
const conn = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB}`


const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

const sequelize = new Sequelize(conn, {
  logging: false, native:false // Desactivar los logs de Sequelize
});

// Ejecutar las funciones de los modelos
UserModel(sequelize);
FavoriteModel(sequelize);

// Relación de modelos
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize
};




// //require('dotenv').config();

// DB_USER= "postgres"
// DB_PASSWORD="admin"
// DB_HOST="localhost:5432"



// const { Sequelize } = require('sequelize');
// //const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const UserModel = require("./models/User");
// const FavoriteModel = require("./models/Favorite");


// const sequelize = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//    { logging: false, native: false }
// );


// // Debajo ejecutar la función de los modelos.

// UserModel(sequelize);
// FavoriteModel(sequelize);




// // Relación de  modelos 
// const { User, Favorite } = sequelize.models;

// User.belongsToMany(Favorite,{through:"user_favorite"});
// Favorite.belongsToMany(User,{through:"user_favorite"});


// module.exports = {
//    User,
//    Favorite,
//    conn: sequelize,
// };
