const express = require('express')
const { guild, guild_invites, guild_rank, player } = require('../models')
const { getMessage } = require('../helpers/messages')

const router = express.Router()

/* forum list */

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
	const { id } = req.params

	const getOneGuild = await guild.findOne({
		where: { id },
	})

	return res.jsonOK(getOneGuild)
})

/* guild membership */
// router.get('')

//router.delete('/')

/* player invite */
router.post('/:id/invite', async (req, res) => {
	try {
		const { id } = req.params
		const { body } = req
		const { player_id } = body

		// const verifyRank = await 

		const playerExists = await player.findOne({
			where: { name: player_id },
		})

		if (!playerExists)
			return res.jsonBadRequest(
				null,
				'player does not exists, please check name.'
			)

		const invitePlayer = await guild_invites.create({
			player_id: playerExists.id,
			guild_id: id,
			date: Date.now(),
		})

		return res.jsonOK(invitePlayer)
	} catch (error) {
		console.log(error)
	}
})

router.get('/:id/accept', async (req, res) => {

})

module.exports = router
