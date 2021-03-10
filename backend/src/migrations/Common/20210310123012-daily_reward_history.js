'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('daily_reward_history', {
        daystreak: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        player_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'players',
            key: 'id',
          },
        },
        timestamp: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        description: {
          allowNull: false,
          type: Sequelize.TEXT('long'),
        },
      })
      .then(() =>
        queryInterface.addIndex('daily_reward_history', ['player_id'])
      ),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('daily_reward_history'),
};
