module.exports = (sequelize, DataTypes) => {
  const shop_offers = sequelize.define(
    'shop_offers',
    {
      coins: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shop_amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      shop_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shop_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shop_description: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
      },
      shop_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  //   shop_offers.associate = (models) => {
  //     shop_offers.belongsTo(models.players, { foreignKey: 'player_id' })
  //   }

  return shop_offers;
};
