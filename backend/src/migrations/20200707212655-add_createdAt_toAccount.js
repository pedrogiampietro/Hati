'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('accounts', 'createdAt', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'creation',
      defaultValue: 0,
    })

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('accounts', 'createdAt')

  }
};
