module.exports = (sequelize, DataTypes) => {

    const Player = sequelize.define('Player', {
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        level: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        vocation: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        looktype: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 128,
        },
    })

    Player.associate = (models) => {
        Player.belongsTo(models.Account, { foreignKey: 'account_id' })
    }

    return Player

}