'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Players', 'updatedAt', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'deleted',
      defaultValue: 0,
    })

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Players', 'updatedAt')

  }
};
