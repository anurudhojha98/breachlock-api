'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    categoryId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    categoryType: {
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
    tableName: 'category'
  });
  Category.associate = function (models) {
    // associations can be defined here'
    Category.hasMany(models.CategoryItems, {
      as: 'categoryItems',
      foreignKey: 'categoryId',
      constraints: true
    })
  };
  return Category;
};