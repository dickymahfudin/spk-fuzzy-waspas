'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.kriteria, {
        foreignKey: 'kriteria_id',
        as: 'kriteria',
      });
      this.belongsTo(models.bread, {
        foreignKey: 'bread_id',
        as: 'bread',
      });
    }

    static async getAll(where = [], date = null) {
      const exclude = ['password', 'createdAt', 'updatedAt'];
      if (date)
        date = {
          tgl_produksi: date,
        };
      return await this.findAll({
        where,
        include: [
          {
            model: sequelize.models.kriteria,
            as: 'kriteria',
            attributes: { exclude },
          },
          {
            model: sequelize.models.bread,
            as: 'bread',
            where: date,
            attributes: { exclude },
          },
        ],
        attributes: { exclude },
        order: [['id', 'DESC']],
        // group: ["bread_id"],
      })
        .then(result => {
          return result;
        })
        .catch(err => {
          console.log(err);
          return err;
        });
    }
  }
  link.init(
    {
      kriteria_id: DataTypes.INTEGER,
      bread_id: DataTypes.INTEGER,
      value: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'link',
    }
  );
  return link;
};
