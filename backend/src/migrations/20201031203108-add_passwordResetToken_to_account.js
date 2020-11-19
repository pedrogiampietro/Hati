'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('accounts', 'passwordResetToken', {
			type: Sequelize.STRING,
			allowNull: false,
			after: 'gender',
			defaultValue: '',
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('accounts', 'passwordResetToken')
	},
}
