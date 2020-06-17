'use strict';
const commonFunction = require('../../common/commonFunctions');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category_items', commonFunction.prepareMasterData(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category_items', null, {});

  }
};
