'use strict';
var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    fName: {
      type: DataTypes.STRING,
      required: true
    },
    lName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      required: true
    },
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        {
          user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
        }
      }
    },
    underscored: true
  });
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};