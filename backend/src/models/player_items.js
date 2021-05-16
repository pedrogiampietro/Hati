module.exports = (sequelize, DataTypes) => {
  const player_items = sequelize.define(
    'player_items',
    {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'players',
          key: 'id',
        },
      },
      pid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      sid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemtype: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attributes: {
        type: DataTypes.BLOB('medium'),
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );

  player_items.associate = (models) => {
    player_items.belongsTo(models.players, { foreignKey: 'player_id' });
  };

  return player_items;
};
