module.exports = (sequelize, DataTypes) => {
  const shop_inventories = sequelize.define('shop_inventories', {
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'accounts',
        key: 'id',
      },
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    item_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_description: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
    item_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sended_to: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'open',
    },
  });

  shop_inventories.associate = (models) => {
    shop_inventories.belongsTo(models.accounts, { foreignKey: 'account_id' });
  };

  return shop_inventories;
};
