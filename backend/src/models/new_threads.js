module.exports = (sequelize, DataTypes) => {
	const thread = sequelize.define('thread', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		character_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		body_text: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		views: {
			type: DataTypes.STRING,
			defaultValue: '',
			allowNull: false,
		},
		board_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: { model: 'forumBoards', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		},
		account_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: { model: 'accounts', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		},
		likes_count: {
			type: DataTypes.JSON,
			defaultValue: [],
		},
	})

	thread.associate = (models) => {
		thread.belongsTo(models.forumBoard, { foreignKey: 'board_id' })
		thread.belongsTo(models.account, { foreignKey: 'account_id' })
		// thread.belongsTo(models.player, { foreignKey: 'owner_id' })
	}

	return thread
}
