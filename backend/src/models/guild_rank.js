module.exports = (sequelize, DataTypes) => {
  const guild_ranks = sequelize.define(
    'guild_ranks',
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
      freezeTableName: true,
    }
  )

  guild_ranks.associate = (models) => {
    guild_ranks.belongsTo(models.guilds, { foreignKey: 'guild_id' })
    guild_ranks.hasMany(models.guild_membership, { foreignKey: 'guild_id' })
  }

  return guild_ranks
}
