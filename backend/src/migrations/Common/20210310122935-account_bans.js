'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('account_bans', {
        account_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'accounts',
            key: 'id',
          },
        },
        reason: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        banned_at: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        expires_at: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        banned_by: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'players',
            key: 'id',
          },
        },
      })
      .then(() => queryInterface.addIndex('account_bans', ['banned_by'])),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('account_bans'),
};
