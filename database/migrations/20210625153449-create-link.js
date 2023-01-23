'use strict';
const dataLaporan = require('../../src/helpers/dataLaporan');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kriteria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'kriterias',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      bread_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'breads',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      value: {
        type: Sequelize.FLOAT(11, 10),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('links');
  },
};
