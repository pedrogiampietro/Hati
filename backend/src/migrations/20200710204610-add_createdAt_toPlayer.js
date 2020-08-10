'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('players', 'createdAt', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'soul',
      defaultValue: 0,
    })

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('players', 'createdAt')

  }
};
