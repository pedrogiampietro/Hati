'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('player_deaths', 'id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			after: 'player_id',
			defaultValue: 0,
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('player_deaths', 'id')
	},
}
