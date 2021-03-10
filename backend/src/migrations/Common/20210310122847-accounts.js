'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('accounts', {
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING,
      },
      premdays: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      lastday: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.BOOLEAN,
      },
      coins: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      creation: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      recruiter: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('accounts'),
};
