module.exports = (sequelize, DataTypes) => {
	const threads = sequelize.define(
		'threads',
		{
			title: {
				type: DataTypes.STRING,
				// primaryKey: true,
				allowNull: false,
				defaultValue: '',
			},
			character_name: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: '',
			},
			body_text: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: '',
			},
			views: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: '',
			},
			board_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: { model: 'forumBoard', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			account_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				reference: {
					model: 'account',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
		},
		{ freezeTableName: true }
	)

	threads.associate = (models) => {
		threads.belongsTo(models.forumBoard, { foreignKey: 'board_id' })
		threads.belongsTo(models.account, { foreignKey: 'account_id' })
	}

	return threads
}
