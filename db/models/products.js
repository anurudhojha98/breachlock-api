'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('Products', {
    clientName: {
      type: DataTypes.STRING
    },
    ageGroup: {
      type: DataTypes.STRING
    },
    servingType: {
      type: DataTypes.STRING
    },
    foodCategory: {
      type: DataTypes.STRING
    },
    servingSize: {
      type: DataTypes.STRING
    },
    servingPerDay: {
      type: DataTypes.STRING
    },
    packSize: {
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
    tableName: 'products'
  });
  products.associate = function (models) {
    // associations can be defined here
  };
  return products;
};