const express = require('express')
const { guild, player } = require('../models')
const { getMessage } = require('../helpers/messages')

const router = express.Router()

router.post('/', async (req, res) => {
	const { body } = req
	const { name, ownerid, description } = body

	try {
		const findGuild = await guild.findOne({ where: { name } })
		if (findGuild)
			return res.jsonBadRequest(
				null,
				getMessage('this guild already exists, choose another name.')
			)

		const createGuild = await guild.create({
			name,
			ownerid,
			description,
			creationdata: Date.now(),
		})

		return res.jsonOK(createGuild)
	} catch (error) {
		console.log(error)
	}
})

router.get('/', async (req, res) => {
	const getAllGuilds = await guild.findAll({
		include: [
			{
				model: player,
				attributes: ['name'],
			},
		],
	})

	return res.jsonOK(getAllGuilds)
})

router.get('/:id', async (req, res) => {
	const { id } = req

	const getOneGuild = await guild.findOne({
		where: { id },
	})

	return res.jsonOK(getOneGuild)
})

//router.delete('/')

module.exports = router
