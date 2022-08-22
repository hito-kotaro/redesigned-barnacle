'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class approval extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  approval.init({
    questId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    applicantId: DataTypes.INTEGER,
    authorizerId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'approval',
    underscored: true,
  });
  return approval;
};