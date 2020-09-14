'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('player_deaths', 'createdAt', {
			type: Sequelize.DATE(3),
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
			allowNull: false,
			after: 'mostdamage_unjustified',
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('player_deaths', 'createdAt')
	},
}
