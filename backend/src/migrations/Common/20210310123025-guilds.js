'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('guilds', {
        name: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        ownerid: {
          allowNull: false,
          type: Sequelize.INTEGER,
          unique: true,
          onDelete: 'CASCADE',
          references: {
            model: 'players',
            key: 'id',
          },
        },
        creationdata: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        motd: {
          allowNull: false,
          defaultValue: '',
          type: Sequelize.TEXT('long'),
        },
        residence: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        balance: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BIGINT,
        },
      })
      .then(() => queryInterface.addIndex('guilds', ['player_id'])),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('guilds'),
};
