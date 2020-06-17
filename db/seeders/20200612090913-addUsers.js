'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      f_name: 'John',
      l_name: 'Doe',
      email: 'john.doe@neocepts.co.in',
      password: '$2a$10$lOeLBfrxOsRDO3pXKJy/Zeg3jrkl/3o6UvXNm0OtMuM/LpMraRAua'
    }, {
      f_name: 'admin',
      l_name: 'Doe',
      email: 'admin@neocepts.co.in',
      password: '$2a$10$lOeLBfrxOsRDO3pXKJy/Zeg3jrkl/3o6UvXNm0OtMuM/LpMraRAua'
    }], {})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});

  }
};
