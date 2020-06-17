'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryItem = sequelize.define('CategoryItems', {
    itemName: {
      type: DataTypes.STRING
    },
    isActive: {
      type: DataTypes.INTEGER,
      defaultValue: 1
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
    tableName: 'category_items'
  });
  CategoryItem.associate = function (models) {

  };
  return CategoryItem;
};