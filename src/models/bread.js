'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bread.init(
    {
      name: DataTypes.STRING,
      result: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'bread',
      tableName: 'breads',
    }
  );
  return bread;
};
