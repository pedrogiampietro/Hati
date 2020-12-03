module.exports = (sequelize, DataTypes) => {
  const forum_board = sequelize.define(
    'forum_board',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      topics: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      posts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    { freezeTableName: true }
  )

  forum_board.associate = (models) => {
    forum_board.hasMany(models.threads, { foreignKey: 'board_id' })
  }

  return forum_board
}
