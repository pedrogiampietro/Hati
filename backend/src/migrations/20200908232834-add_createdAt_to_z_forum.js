'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('z_forum', 'createdAt', {
			type: Sequelize.DATE(3),
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
			allowNull: false,
			after: 'icon_id',
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('z_forum', 'createdAt')
	},
}
