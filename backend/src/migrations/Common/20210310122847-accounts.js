'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('accounts', {
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
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('accounts'),
};
