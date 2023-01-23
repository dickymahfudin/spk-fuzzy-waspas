'use strict';
const { Model, Op } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kriteria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
    static async getAll(hide) {
      const options = {
        order: [['id', 'ASC']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      };
      if (hide) options.where = { name: { [Op.not]: 'Produksi' } };
      return await this.findAll(options)
        .then(result => result)
        .catch(err => err);
    }
  }
  kriteria.init(
    {
      name: DataTypes.STRING,
      bobot: DataTypes.FLOAT,
      jenis: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'kriteria',
      tableName: 'kriterias',
    }
  );
  return kriteria;
};
