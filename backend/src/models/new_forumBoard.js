module.exports = (sequelize, DataTypes) => {
	const forumBoard = sequelize.define('forumBoard', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '',
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '',
		},
		topics: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		posts: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	})

	forumBoard.associate = (models) => {
		forumBoard.hasMany(models.thread, { foreignKey: 'board_id' })
	}

	return forumBoard
}
