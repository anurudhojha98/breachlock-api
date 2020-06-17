'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    companyName: {
      type: DataTypes.STRING
    },
    logo: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    websits: {
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
    tableName: 'company'
  });
  company.associate = function (models) {
    company.hasMany(models.companyContacts, {
      as: 'companyContacts',
      foreignKey: 'companyId',
      constraints: true
    })
  };
  return company;
};