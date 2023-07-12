const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         primaryKey: true,
         type: DataTypes.INTEGER,
      allowNull: false  
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   status:{
      type: DataTypes.ENUM ("Alive","Dead", "unknown"),
      allowNull: false
   },
   species: {
      type: DataTypes.STRING,
      allowNull: false
   },
   gender: {
      type: DataTypes.ENUM ("Female" , "Male" , "Genderless" , "unknown"),
      allowNull: false
   },
   origin:{
      type: DataTypes.JSON, ///PUEDE NECESITAR 
      allowNull: false
   },
   image:{
      type: DataTypes.STRING,
      allowNull: false
   }
   }, { timestamps: false });
};
