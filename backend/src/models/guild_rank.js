module.exports = (sequelize, DataTypes) => {
	const guild_rank = sequelize.define(
		'guild_rank',
		{
			guild_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				reference: {
					model: 'guild',
					key: 'id',
				},
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			level: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
		},
		{
			timestamps: false,
		}
	)

	guild_rank.associate = (models) => {
		guild_rank.belongsTo(models.guild, { foreignKey: 'guild_id' })
		guild_rank.hasMany(models.guild_membership, { foreignKey: 'guild_id' })
	}

	return guild_rank
}
