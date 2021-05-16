module.exports = (sequelize, DataTypes) => {
  const player_storage = sequelize.define(
    'player_storage',
    {
      player_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'players',
          key: 'id',
        },
      },
      key: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        defaultValue: 0,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  player_storage.associate = (models) => {
    player_storage.belongsTo(models.players, { foreignKey: 'player_id' });
  };

  return player_storage;
};
