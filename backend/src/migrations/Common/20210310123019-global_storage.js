'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('global_storage', {
      key: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
      },
      value: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('global_storage'),
};
