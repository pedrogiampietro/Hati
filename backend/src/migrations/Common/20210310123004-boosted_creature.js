'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('boosted_creature', {
        boostname: {
          type: Sequelize.TEXT,
        },
        date: {
          allowNull: false,
          type: Sequelize.STRING,
          primaryKey: true,
        },
        raceid: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        looktype: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        lookfeet: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        looklegs: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        lookhead: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        lookbody: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        lookaddons: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        lookmount: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      })
      .then(() =>
        queryInterface.addIndex('boosted_creature', ['account_id', 'player_id'])
      ),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('boosted_creature'),
};
