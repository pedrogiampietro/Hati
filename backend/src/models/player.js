module.exports = (sequelize, DataTypes) => {
	const player = sequelize.define('player', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		group_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
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
		health: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 185,
		},
		healthmax: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 185,
		},
		experience: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 4200,
		},
		lookbody: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		lookfeet: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		lookhead: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		looklegs: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		looktype: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 128,
		},
		lookaddons: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		maglevel: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		mana: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 35,
		},
		manamax: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 35,
		},
		manaspent: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		soul: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 100,
		},
		town_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 7,
		},
		posx: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 157,
		},
		posy: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 54,
		},
		posz: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 7,
		},
		conditions: {
			type: DataTypes.BLOB,
			allowNull: false,
			defaultValue: 0,
		},
		cap: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 930,
		},
		sex: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		lastlogin: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		lastip: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		save: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
		},
		skull: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0,
		},
		skulltime: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		lastlogout: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		blessings: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		onlinetime: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		deletion: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0,
		},
		balance: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0,
		},
		offlinetraining_time: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		offlinetraining_skill: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		stamina: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		skill_axe: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
		},
		skill_axe_tries: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		skill_sword: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
		},
		skill_sword_tries: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		skill_club: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
		},
		skill_club_tries: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		skill_fist: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
		},
		skill_fist_tries: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		skill_shielding: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
		},
		skill_shielding_tries: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		skill_dist: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
		},
		skill_dist_tries: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		skill_fishing: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
		},
		skill_fishing_tries: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		deletion: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
		balance: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 0,
		},
	})

	player.associate = (models) => {
		player.belongsTo(models.account, { foreignKey: 'account_id' })
		player.hasMany(models.z_forum, { foreignKey: 'id' }) // <- alterar aqui depois.
		player.hasMany(models.player_deaths, { foreignKey: 'player_id' })
	}

	return player
}
