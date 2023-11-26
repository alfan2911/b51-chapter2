'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projects.init({
    img: DataTypes.STRING,
    projectName: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    duration: DataTypes.STRING,
    description: DataTypes.STRING,
    technologies: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'projects',
  });
  return projects;
};