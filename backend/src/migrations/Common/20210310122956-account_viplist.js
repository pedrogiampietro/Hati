'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('account_viplist', {
      account_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'accounts',
          key: 'id',
        },
      },
      player_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'accounts',
          key: 'id',
        },
      },
      description: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.TEXT('long'),
      },
      icon: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.BOOLEAN,
      },
      notify: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.BOOLEAN,
      },
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('account_viplist'),
};
