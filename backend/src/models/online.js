module.exports = (sequelize, DataTypes) => {
  const players_online = sequelize.define(
    'players_online',
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'players',
          key: 'id',
        },
      },
    },
    { freezeTableName: true, timestamps: false }
  )

  players_online.associate = (models) => {
    players_online.belongsTo(models.players, { foreignKey: 'player_id' })
    players_online.hasMany(models.guild_membership, {
      foreignKey: 'player_id',
    })
  }

  return players_online
}
