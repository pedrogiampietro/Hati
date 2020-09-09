'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('accounts', 'createdAt', {
			type: Sequelize.DATE(3),
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
			allowNull: false,
			after: 'creation',
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('accounts', 'createdAt')
	},
}
