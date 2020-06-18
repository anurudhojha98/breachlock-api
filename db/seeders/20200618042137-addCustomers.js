'use strict';
const commonFunction = require('../../common/commonFunctions');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', commonFunction.getClientListFromFile(), {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});

  }
};
