'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    customerId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    businessEntityName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    underscored: true,
    tableName: 'customers'
  });
  Customers.associate = function (models) {
    // associations can be defined here
    Customers.hasMany(models.CustomersAddress, {
      as: 'customerAddress',
      foreignKey: 'customerId',
      constraints: true
    })
    Customers.hasMany(models.CustomersContact, {
      as: 'customerContacts',
      foreignKey: 'customerId',
      constraints: true
    })
  };
  return Customers;
};