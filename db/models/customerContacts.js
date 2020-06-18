'use strict';
module.exports = (sequelize, DataTypes) => {
  const CustomerContacts = sequelize.define('CustomersContact', {
    custContactId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    contactType: {
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
    tableName: 'cutomers_contact'
  });
  CustomerContacts.associate = function (models) {
    // associations can be defined here
  };
  return CustomerContacts;
};