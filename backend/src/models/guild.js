module.exports = (sequelize, DataTypes) => {
	const guild = sequelize.define(
		'guild',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			ownerid: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				reference: {
					model: 'player',
					key: 'id',
				},
			},
			creationdata: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
			},
			motd: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: '',
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			guild_logo: {
				type: DataTypes.BLOB('medium'),
				allowNull: false,
			},
			create_ip: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			balance: {
				type: DataTypes.BIGINT,
				allowNull: false,
				defaultValue: 0,
			},
			last_execute_points: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			logo_gfx_name: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: '',
			},
		},
		{
			hooks: {
				afterCreate: function (user, options) {
					models.guild_rank.create({
						name: 'the Leader',
						level: 3,
						guild_id: user.id,
						name: 'a Vice-Leader',
						level: 2,
						guild_id: user.id,
						name: 'a Member',
						level: 1,
						guild_id: user.id,
					})
				},
			},
		}
	)

	guild.associate = (models) => {
		guild.belongsTo(models.player, { foreignKey: 'ownerid' })
		guild.hasOne(models.guild_rank, { foreignKey: 'guild_id' })
	}

	return guild
}
