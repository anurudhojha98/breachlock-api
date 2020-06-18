'use strict';
module.exports = (sequelize, DataTypes) => {
  const CustomerAddress = sequelize.define('CustomersAddress', {
    custAddressId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    addressType: {
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
    tableName: 'cutomers_address'
  });
  CustomerAddress.associate = function (models) {
    // associations can be defined here
  };
  return CustomerAddress;
};