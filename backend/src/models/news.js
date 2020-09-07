module.exports = (sequelize, DataTypes) => {
	const z_forum = sequelize.define('z_forum', {
		first_post: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		last_post: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		section: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		views: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		author_aid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		author_guid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		post_text: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post_topic: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post_smile: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		post_date: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		last_edit_aid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		edit_date: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		post_ip: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '0.0.0.0',
		},
		icon_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	})

	z_forum.associate = models => {
		z_forum.belongsTo(models.player, { foreignKey: 'id' })
	}

	return z_forum
}
