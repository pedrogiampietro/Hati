'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('accounts', 'passwordResetExpires', {
			type: Sequelize.DATE(3),
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
			allowNull: false,
			after: 'gender',
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('accounts', 'passwordResetExpires')
	},
}
