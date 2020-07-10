'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Players', 'createdAt', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'deleted',
      defaultValue: 0,
    })

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Players', 'createdAt')

  }
};
