const express = require('express')
const {
	guild,
	guild_invites,
	guild_rank,
	guild_membership,
	player,
	account,
} = require('../models')
const { getMessage } = require('../helpers/messages')
const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt')
const { checkJwt } = require('../middlewares/jwt')

const router = express.Router()

router.post('/', checkJwt, async (req, res) => {
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
		include: [
			{
				model: guild_membership,
				include: [
					{
						model: player,
						attributes: ['name'],
					},
				],
			},
		],
	})

	return res.jsonOK(getOneGuild)
})

//router.delete('/')

/* player invite */
router.post('/:id/invite', checkJwt, async (req, res) => {
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

/* accept invite */
router.get('/:id/accept', checkJwt, async (req, res) => {})

/* get invites */
router.get('/:id/getInvites', checkJwt, async (req, res) => {
	try {
		const { account_id } = req
		const { id } = req.params

		const players = await player.findAll({
			where: { account_id: account_id },
		})

		const getAllInvites = await guild_invites.findAll({
			where: { id },
			include: [
				{
					model: player,
					attributes: ['name'],
				},
			],
		})

		console.log(players)
		console.log(getAllInvites)

		// return res.jsonOK(accounts)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
