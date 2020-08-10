module.exports = (sequelize, DataTypes) => {

    const player = sequelize.define('player', {
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

    player.associate = (models) => {
        player.belongsTo(models.account, { foreignKey: 'account_id' })
    }

    return player

}