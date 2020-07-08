module.exports = (sequelize, DataTypes) => {

    const Account = sequelize.define('Account', {
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false,
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
        coins: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        lastday: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        key: { 
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0,
        },
    })

    Account.prototype.toJSON = function() {
        const values = { ...this.get() }
        delete values.password
        return values
    }

    return Account

}