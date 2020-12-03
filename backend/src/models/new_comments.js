module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    'comments',
    {
      post_content: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      character_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thread_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'threads', key: 'id' },
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
    },
    { freezeTableName: true }
  )

  comments.associate = (models) => {
    comments.belongsTo(models.threads, { foreignKey: 'thread_id' })
    comments.belongsTo(models.accounts, { foreignKey: 'account_id' })
  }

  return comments
}
