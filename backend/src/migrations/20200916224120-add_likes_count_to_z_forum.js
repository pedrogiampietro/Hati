'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('z_forum', 'likes_count', {
			type: Sequelize.INTEGER,
			allowNull: false,
			after: 'views',
			defaultValue: 0,
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('z_forum', 'likes_count')
	},
}
