const express = require('express')
const {
	guild,
	guild_invites,
	guild_rank,
	guild_membership,
	player,
	players_online,
} = require('../models')
const { getMessage } = require('../helpers/messages')
const { checkJwt } = require('../middlewares/jwt')
const { createGuild } = require('../validators/guild')

const router = express.Router()

router.post('/', checkJwt, createGuild, async (req, res) => {
	const { body } = req
	const { name, ownerid, description } = body

	try {
		const findGuild = await guild.findOne({ where: { name } })
		if (findGuild)
			return res.jsonBadRequest(
				null,
				getMessage('player.createGuild.name_exists')
			)

		const alreadyHaveGuild = await guild.findOne({ where: { ownerid } })
		if (alreadyHaveGuild)
			return res.jsonBadRequest(
				null,
				getMessage('player.createGuild.already_owner')
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

//get ranks and members
router.get('/:id/members', async (req, res) => {
	const { id } = req.params

	const getMembers = await guild_membership.findAll({
		where: { guild_id: id },

		include: [
			{
				model: guild_rank,
				where: {
					guild_id: id,
				},
			},
			{
				model: player,
				attributes: [
					'name',
					'vocation',
					'level',
					'lookbody',
					'lookfeet',
					'lookhead',
					'looklegs',
					'looktype',
					'lookaddons',
				],
			},
			{ model: players_online },
		],
	})

	return res.jsonOK(getMembers)
})

//router.delete('/')

/* player invite */
router.post('/:id/invite', checkJwt, async (req, res) => {
	try {
		const { id } = req.params
		const { account_id, body } = req
		const { player_id } = body

		const players = await player.findAll({ where: { account_id } })
		const getPlayerAccounts = players.map((p) => p.id)

		const verifyLeader = await guild.findOne({
			where: { id, ownerid: getPlayerAccounts },
		})

		if (!verifyLeader)
			return res.jsonBadRequest(
				null,
				getMessage('player.guild_invite_permission')
			)

		const playerExists = await player.findOne({
			where: { name: player_id },
		})

		if (!playerExists)
			return res.jsonBadRequest(null, getMessage('player.guild_invite'))

		const alreadyMember = await guild_membership.findAll({
			where: { guild_id: id },
		})

		if (alreadyMember)
			return res.jsonBadRequest(null, 'this member already joined this guild.')

		const alreadyInvited = await guild_invites.findAll({
			where: { guild_id: id },
		})

		if (alreadyInvited)
			return res.jsonBadRequest(null, 'this player already invited.')

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

/* get invites */
router.get('/:id/getInvites', async (req, res) => {
	try {
		const { id } = req.params

		const getAllInvites = await guild_invites.findAll({
			where: { guild_id: id },
			include: [
				{
					model: player,
					attributes: ['name', 'level', 'vocation'],
				},
			],
		})

		return res.jsonOK(getAllInvites)
	} catch (error) {
		console.log(error)
	}
})

router.get('/:id/hasInvite', checkJwt, async (req, res) => {
	try {
		const { id } = req.params
		const { account_id } = req

		const players = await player.findAll({
			where: { account_id: account_id },
		})

		const getPlayerAccounts = players.map((p) => p.id)

		const getAllInvites = await guild_invites.findAll({
			where: { guild_id: id, player_id: getPlayerAccounts },
			include: [
				{
					model: player,
					attributes: ['name', 'level', 'vocation'],
				},
			],
		})

		return res.jsonOK(getAllInvites)
	} catch (error) {
		console.log(error)
	}
})

router.post('/:id/accept', checkJwt, async (req, res) => {
	try {
		const { id } = req.params
		const { account_id, body } = req
		const playerId = Object.keys(body)

		const players = await player.findAll({
			where: { account_id: account_id },
		})

		const getPlayerAccounts = players.map((p) => p.id)

		const findInvite = await guild_invites.findAll({
			where: { guild_id: id, player_id: getPlayerAccounts },
		})

		if (!findInvite)
			return res.jsonBadRequest(null, getMessage('player.guild_not_invited'))

		const haveGuild = await guild_membership.findAll({
			where: { player_id: Number(playerId) },
		})

		if (haveGuild.length > 0)
			return res.jsonBadRequest(null, 'this player already have guild.')

		const deleteAfterinvite = await guild_invites.findOne({
			where: { guild_id: id, player_id: Number(playerId) },
		})

		deleteAfterinvite.destroy()

		const addToGuild = await guild_membership.create({
			player_id: Number(playerId),
			guild_id: id,
			rank: 1,
		})

		return res.jsonOK(addToGuild)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
