const { Sequelize } = require('sequelize');

const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

const sequelize = new Sequelize(
  "rickandmorty", // nombre de la base de datos
  "postgres", // usuario de la base de datos
  "admin", // contraseña de la base de datos
  {
    host: "localhost", // host de la base de datos
    port: 5432, // puerto de la base de datos
    dialect: "postgres", // dialecto de la base de datos
    logging: false, // desactivar los logs de Sequelize
    // Evitar que se eliminen y creen las tablas al iniciar la aplicación
    // force: true,
    // Sincronizar la estructura de la base de datos sin borrar los datos existentes
    alter: true
  }
);

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
