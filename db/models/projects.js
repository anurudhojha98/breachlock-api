'use strict';
module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define('Projects', {
    projectId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    companyName: {
      type: DataTypes.STRING,
      required: true
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE,
      required: true
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE,
      required: true
    },
    isFormulation: {
      type: DataTypes.BOOLEAN
    },
    isLabelValidation: {
      type: DataTypes.BOOLEAN
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
    tableName: 'projects'
  });
  Projects.associate = function (models) {
    // associations can be defined here
  };
  return Projects;
};