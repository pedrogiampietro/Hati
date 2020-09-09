'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('players', 'updatedAt', {
			type: Sequelize.DATE(3),
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
			allowNull: false,
			after: 'soul',
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('players', 'updatedAt')
	},
}
