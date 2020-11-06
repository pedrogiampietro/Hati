'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('threads', 'likes_count', {
			type: Sequelize.JSON,
			allowNull: false,
			after: 'views',
			defaultValue: [],
			references: {
				model: 'players',
				key: 'id',
			},
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('threads', 'likes_count')
	},
}
