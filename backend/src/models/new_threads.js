module.exports = (sequelize, DataTypes) => {
	const threads = sequelize.define(
		'threads',
		{
			title: {
				type: DataTypes.STRING,
				primaryKey: true,
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
				reference: {
					model: 'forumBoard',
					key: 'id',
				},
			},
		},
		{ freezeTableName: true }
	)

	threads.associate = (models) => {
		threads.belongsToMany(models.forumBoard, { through: 'forumBoard', as: 'boards', foreignKey: 'board_id' })
	}

	return threads
}
