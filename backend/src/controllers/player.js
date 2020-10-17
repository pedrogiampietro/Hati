const express = require('express')
const { player, player_deaths, account } = require('../models')
const { createCharacter } = require('../validators/player')
const { getMessage } = require('../helpers/messages')

const router = express.Router()

router.get('/characters', async (req, res) => {
	const { account_id } = req
	const players = await player.findAll({
		where: { account_id: account_id },

		include: [
			{
				model: account,
				attributes: [
					'name',
					'email',
					'type',
					'creation',
					'premdays',
					'rlname',
					'location',
					'flag',
				],
			},
		],
	})

	return res.jsonOK(players)
})

router.get('/character/:name', async (req, res) => {
	const { name } = req.params
	const limit = 5

	const players = await player.findAndCountAll({
		where: {
			name,
		},

		attributes: [
			'id',
			'name',
			'sex',
			'vocation',
			'town_id',
			'level',
			'health',
			'healthmax',
			'mana',
			'manamax',
			'soul',
			'stamina',
			'maglevel',
			'lastlogin',
			'skill_fist',
			'skill_club',
			'skill_sword',
			'skill_axe',
			'skill_dist',
			'skill_shielding',
			'skill_fishing',
			'lookbody',
			'lookfeet',
			'lookhead',
			'looklegs',
			'looktype',
			'lookaddons',
		],

		include: [
			{
				model: player_deaths,
				limit,
				order: [
					['time', 'DESC'],
					['time', 'ASC'],
				],
				attributes: [
					'player_id',
					'level',
					'killed_by',
					'time',
					'mostdamage_by',
					'unjustified',
					'is_player',
				],
			},
		],
	})

	if (players.count === 0) {
		return res.jsonBadRequest(
			null,
			getMessage('character.search.name_not_exists')
		)
	}

	return res.jsonOK(players)
})

router.get('/highscores', async (req, res) => {
	const { vocation, page } = req.query

	let filterVocation = Number(vocation)
	let players
	const pageSize = page
	const limit = 10
	const offset = Number(pageSize) * limit

	if (vocation === 'all') {
		players = await player.findAll({
			limit,
			offset: offset,

			order: [
				['level', 'DESC'],
				['name', 'ASC'],
			],
		})
	} else {
		players = await player.findAll({
			where: {
				vocation: filterVocation,
			},

			limit,
			offset: offset,
			order: [
				['level', 'DESC'],
				['name', 'ASC'],
			],
		})
	}

	return res.jsonOK(players)
})

router.get('/:id', async (req, res) => {
	const { account_id } = req
	const { id } = req.params
	const players = await player.findOne({
		where: { id: id, account_id: account_id },
	})
	if (!players) return res.jsonNotFound(null)

	return res.jsonOK(players)
})

router.post('/', createCharacter, async (req, res) => {
	const { account_id, body } = req
	const { name, vocation, sex } = body

	const findCharacter = await player.findOne({ where: { name } })
	if (findCharacter)
		return res.jsonBadRequest(
			null,
			getMessage('player.createcharacter.name_exists')
		)

	const players = await player.create({
		name,
		account_id,
		vocation,
		sex,
		looktype: 128,
	})

	return res.jsonOK(players, getMessage('player.createcharacter.success'))
})

router.put('/:id', async (req, res) => {
	const { account_id, body } = req
	const { id } = req.params

	const fields = ['name'] //['name', 'comments', 'outfits', 'items']

	const players = await player.findOne({
		where: { id: id, account_id: account_id },
	})
	if (!players) return res.jsonNotFound(null)

	fields.map((fieldName) => {
		const newValue = body[fieldName]
		if (newValue) players[fieldName] = newValue
	})

	await players.save()
	return res.jsonOK(players)
})

router.delete('/:id', async (req, res) => {
	const { account_id } = req
	const { id } = req.params
	const players = await player.findOne({
		where: { id: id, account_id: account_id },
	})
	if (!players) return res.jsonNotFound(null)

	await players.destroy()
	return res.jsonOK()
})

module.exports = router
