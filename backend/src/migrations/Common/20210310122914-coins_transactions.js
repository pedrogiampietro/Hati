'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('coins_transactions', {
        account_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'accounts',
            key: 'id',
          },
        },
        type: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        amount: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        description: {
          allowNull: false,
          type: Sequelize.TEXT('long'),
        },
        timestamp: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      })
      .then(() =>
        queryInterface.addIndex('coins_transactions', ['account_id'])
      ),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('coins_transactions'),
};
