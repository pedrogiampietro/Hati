'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
      'server_config',
      {
        config: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING,
        },
        value: {
          allowNull: false,
          type: Sequelize.TEXT('long'),
        },
      },
      { timestamps: false, freezeTableName: true }
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('server_config'),
};
