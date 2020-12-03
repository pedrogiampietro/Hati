module.exports = (sequelize, DataTypes) => {
  const guild_invites = sequelize.define(
    'guild_invites',
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
      date: {
        type: DataTypes.DATE,
      },
    },
    { freezeTableName: true }
  )

  guild_invites.associate = (models) => {
    guild_invites.belongsTo(models.guilds, { foreignKey: 'guild_id' })
    guild_invites.belongsTo(models.players, { foreignKey: 'player_id' })
  }

  return guild_invites
}
