module.exports = (sequelize, DataTypes) => {
  const shop_orders = sequelize.define(
    'shop_orders',
    {
      account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',
          key: 'id',
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paid_value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  shop_orders.associate = (models) => {
    shop_orders.belongsTo(models.accounts, { foreignKey: 'account_id' });
  };

  return shop_orders;
};
