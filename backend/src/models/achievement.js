module.exports = (sequelize, DataTypes) => {
  const achievements = sequelize.define(
    'achievements',
    {
      achievement_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 20000,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );

  return achievements;
};
