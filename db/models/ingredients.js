'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define('ingredients', {
    schedule: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    subCategory: {
      type: DataTypes.STRING
    },
    nutraType: {
      type: DataTypes.STRING
    },
    Sources: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    underscored: true,
    tableName: 'ingredients'
  });
  Ingredients.associate = function (models) {
    // associations can be defined here
  };
  return Ingredients;
};