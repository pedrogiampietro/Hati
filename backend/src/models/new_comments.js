module.exports = (sequelize, DataTypes) => {
	const comment = sequelize.define('comment', {
		post_content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		character_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		thread_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: { model: 'threads', key: 'id' },
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
	})

	comment.associate = (models) => {
		comment.belongsTo(models.thread, { foreignKey: 'thread_id' })
		comment.belongsTo(models.account, { foreignKey: 'account_id' })
	}

	return comment
}
