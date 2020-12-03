module.exports = (sequelize, DataTypes) => {
  const guilds = sequelize.define(
    'guilds',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownerid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      creationdata: {
        type: DataTypes.BIGINT,
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
        allowNull: true,
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
    { freezeTableName: true }
  )

  // Hooks that automatically add applicable guild_ranks on guild create
  guilds.addHook('afterCreate', (guild) => {
    const addRanks = [
      { name: 'the Leader', level: 3, guild_id: guild.id },
      { name: 'a Vice-Leader', level: 2, guild_id: guild.id },
      { name: 'a Member', level: 1, guild_id: guild.id },
    ]

    for (i = 0; i < addRanks.length; i++) {
      sequelize.models.guild_ranks.create(addRanks[i])
    }
  })

  guilds.addHook('afterCreate', (guild) => {
    sequelize.models.guild_membership.create({
      player_id: guild.ownerid,
      guild_id: guild.id,
      rank: 3,
    })
  })

  guilds.associate = (models) => {
    guilds.belongsTo(models.players, { foreignKey: 'ownerid' })
    guilds.hasMany(models.guild_invites, { foreignKey: 'guild_id' })
    guilds.hasMany(models.guild_membership, { foreignKey: 'guild_id' })
  }

  return guilds
}
