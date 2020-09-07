const express = require('express')
const { player } = require('../models')

const router = express.Router()

router.get('/characters', async (req, res) => {
	const { account_id } = req
	const players = await player.findAll({ where: { account_id: account_id } })

	return res.jsonOK(players)
})

router.get('/character/:name', async (req, res) => {
	const { name } = req.params

	const players = await player.findOne({ where: { name: name } })
	if (!players) return res.jsonNotFound(null)

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

router.post('/', async (req, res) => {
	const { account_id, body } = req
	const { name, level, vocation } = body

	const players = await player.create({
		name,
		account_id,
		level,
		vocation,
		looktype: 128,
	})

	return res.jsonOK(players)
})

router.put('/:id', async (req, res) => {
	const { account_id, body } = req
	const { id } = req.params

	const fields = ['name'] //['name', 'comments', 'outfits', 'items']

	const players = await player.findOne({
		where: { id: id, account_id: account_id },
	})
	if (!players) return res.jsonNotFound(null)

	fields.map(fieldName => {
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
