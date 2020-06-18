'use strict';
module.exports = (sequelize, DataTypes) => {
  const companyContacts = sequelize.define('CompanyContacts', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    mobileNumber: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    profilePicture: {
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
    tableName: 'company_contacts'
  });
  companyContacts.associate = function (models) {
    // associations can be defined here
  };
  return companyContacts;
};