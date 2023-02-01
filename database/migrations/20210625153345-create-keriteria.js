'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('kriterias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100),
      },
      bobot: {
        type: Sequelize.FLOAT,
      },
      jenis: {
        type: Sequelize.INTEGER,
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

    const createdAt = new Date();
    const updatedAt = new Date();
    await queryInterface.bulkInsert('kriterias', [
      { name: 'Produksi', bobot: 0.4, jenis: 1, createdAt, updatedAt },
      { name: 'Pesanan', bobot: 0.4, jenis: 1, createdAt, updatedAt },
      { name: 'Persediaan', bobot: 0.2, jenis: 1, createdAt, updatedAt },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('kriterias');
  },
};
