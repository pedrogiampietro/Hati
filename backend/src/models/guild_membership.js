module.exports = (sequelize, DataTypes) => {
  const guild_membership = sequelize.define(
    'guild_membership',
    {
      player_id: {
        type: DataTypes.INTEGER,
      },
      guild_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: 'guild',
          key: 'id',
        },
      },
      rank: {
        type: DataTypes.INTEGER,
      },
      nick: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  )

  guild_membership.associate = (models) => {
    guild_membership.belongsTo(models.guilds, { foreignKey: 'guild_id' })
    guild_membership.belongsTo(models.players, { foreignKey: 'player_id' })
    guild_membership.belongsTo(models.players_online, {
      foreignKey: 'player_id',
    })
    guild_membership.belongsTo(models.guild_ranks, {
      foreignKey: 'guild_id',
      targetKey: 'guild_id',
    })
  }

  return guild_membership
}
