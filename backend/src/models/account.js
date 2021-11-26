module.exports = (sequelize, DataTypes) => {
  const accounts = sequelize.define('accounts', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    secret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    premdays: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    lastday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    creation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    page_access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    vip_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    rlname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    jwtVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    avatar: {
      type: DataTypes.STRING,
      validate: {
        isString(val) {
          if (typeof val !== 'string') {
            throw new sequelize.ValidationError('Avatar must be a string.');
          }
        },
      },
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      select: false,
    },
    passwordResetExpires: {
      type: DataTypes.DATE,
      select: false,
    },
    profileName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
  });

  accounts.associate = models => {
    accounts.hasMany(models.players, { foreignKey: 'account_id' });
    accounts.hasMany(models.shop_inventories, { foreignKey: 'account_id' });
    accounts.hasMany(models.shop_orders, { foreignKey: 'account_id' });
    accounts.hasMany(models.threads, { foreignKey: 'account_id' });
    accounts.hasMany(models.comments, { foreignKey: 'account_id' });
  };

  accounts.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };

  return accounts;
};
