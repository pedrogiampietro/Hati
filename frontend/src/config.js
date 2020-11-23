/**
 * here are the main settings of the Hati AAC
 *
 * make good use of it.
 *
 * package   HatiAAC
 * author    Pedro
 * copyright 2020 HatiAAC
 * link      github.com/pedrogiampietro/Hati
 */

module.exports = {
	genders: {
		0: 'Female',
		1: 'Male',
	},

	groupsId: {
		1: 'Player',
		2: 'Tutor',
		3: 'Senior Tutor',
		4: 'GameMaster',
		5: 'Community Manager',
		6: 'Administator',
	},

	createVocations: [
		// { vocation_id: '0', name: 'Rook' }, -> comment or uncomment to use the desired vocations in creating account
		{ vocation_id: '1', name: 'Sorcerer' },
		{ vocation_id: '2', name: 'Druid' },
		{ vocation_id: '3', name: 'Paladin' },
		{ vocation_id: '4', name: 'Knight' },
	],

	characterVocations: {
		0: 'No Vocation',
		1: 'Sorcerer',
		2: 'Druid',
		3: 'Paladin',
		4: 'Knight',
		5: 'Master Sorcerer',
		6: 'Elder Druid',
		7: 'Royal Paladin',
		8: 'Elite Knight',
	},

	towns: {
		1: `Ab'dendriel`,
		2: 'Carlin',
		3: 'Kazordoon',
		4: 'Thais',
		5: 'Venore',
		6: 'Ankrahmun',
		7: 'Edron',
		8: 'Farmine',
		9: 'Darashia',
		10: 'Liberty Bay',
		11: 'Port Hope',
		12: 'Svargrond',
		13: 'Yalahar',
		14: 'Gray Beach',
		15: 'Krailos',
		16: 'Rathleton',
		17: 'Roshamuul',
	},

	listSkills: [
		{ type: 'level', name: 'Level' },
		{ type: 'maglevel', name: 'Magic Level' },
		{ type: 'skill_fist', name: 'First Fighting' },
		{ type: 'skill_axe', name: 'Axe Fighting' },
		{ type: 'skill_club', name: 'Club Fighting' },
		{ type: 'skill_sword', name: 'Sword Fighting' },
		{ type: 'skill_dist', name: 'Distance Fighting' },
		{ type: 'skill_shielding', name: 'Shield Fighting' },
		{ type: 'skill_fishing', name: 'Fishing' },
	],
}
