'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [{
      category_id: 1,
      category_type: 'foodCategory'
    },
    {
      category_id: 2,
      category_type: 'targetPopulation'
    },
    {
      category_id: 3,
      category_type: 'servingSize'
    },
    {
      category_id: 4,
      category_type: 'servingType'
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  }
};
