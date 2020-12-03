module.exports = (sequelize, DataTypes) => {
  const threads = sequelize.define(
    'threads',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      character_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body_text: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      views: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false,
      },
      board_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'forum_board', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'accounts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      likes_count: {
        type: DataTypes.JSON,
        defaultValue: [],
      },
    },
    { freezeTableName: true }
  )

  threads.associate = (models) => {
    threads.belongsTo(models.forum_board, { foreignKey: 'board_id' })
    threads.belongsTo(models.accounts, { foreignKey: 'account_id' })
    threads.hasMany(models.comments, { foreignKey: 'thread_id' })
  }

  return threads
}
