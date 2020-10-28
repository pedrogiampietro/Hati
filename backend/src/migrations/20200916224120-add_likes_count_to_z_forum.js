'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('z_forum', 'likes_count', {
			type: Sequelize.JSON,
			allowNull: false,
			after: 'views',
			defaultValue: [],
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('z_forum', 'likes_count')
	},
}
