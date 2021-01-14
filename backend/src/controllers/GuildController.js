const express = require('express')

const {
  guilds,
  guild_invites,
  guild_ranks,
  guild_membership,
  players_online,
  players,
} = require('../models')
const { getMessage } = require('../helpers/messages')
const { checkJwt } = require('../middlewares/jwt')
const { validateCreateGuild } = require('../validators/guild')

const { uploadGuildLogo } = require('../middlewares/multer')

const router = express.Router()

router.post('/', checkJwt, validateCreateGuild, async (req, res) => {
  const { body } = req
  const { name, ownerid, description } = body

  try {
    const findGuild = await guilds.findOne({ where: { name } })
    if (findGuild)
      return res.jsonBadRequest(
        null,
        getMessage('player.createGuild.name_exists')
      )

    const alreadyHaveGuild = await guilds.findOne({ where: { ownerid } })
    if (alreadyHaveGuild)
      return res.jsonBadRequest(
        null,
        getMessage('player.createGuild.already_owner')
      )

    const createGuild = await guilds.create({
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
  const getAllGuilds = await guilds.findAll({
    include: [
      {
        model: players,
        attributes: ['name'],
      },
    ],
  })

  return res.jsonOK(getAllGuilds)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const getOneGuild = await guilds.findOne({
    where: { id },
  })

  return res.jsonOK(getOneGuild)
})

/* get ranks and members */
router.get('/:id/members', async (req, res) => {
  const { id } = req.params

  const getMembers = await guild_membership.findAll({
    where: { guild_id: id },

    include: [
      {
        model: guild_ranks,
        where: {
          guild_id: id,
        },
      },
      {
        model: players,
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

    const getPlayerToInvite = await players.findAll({ where: { account_id } })
    const getPlayerAccounts = getPlayerToInvite.map((p) => p)

    const getRanks = await guild_ranks.findAll({ where: { guild_id: id } })
    const idViceLeader = getRanks.map((getVice) => getVice.level)

    const getViceLeader = await guild_membership.findAll({
      where: { guild_id: id },
    })
    const checkVice = getViceLeader.map((getPermission) => getPermission)

    const alreadyInvited = getViceLeader.map((teste) => teste.player_id)

    getPlayerAccounts.sort()
    checkVice.sort()

    if (
      getPlayerAccounts[0].id == checkVice[0].player_id &&
      checkVice[0].rank >= 2
    ) {
      const playerExists = await players.findOne({
        where: { name: player_id },
      })

      const getPlayerId = Object.values(playerExists)

      if (!playerExists)
        return res.jsonBadRequest(null, getMessage('player.guild_invite'))

      const alreadyMember = await guild_membership.findAll({
        where: { guild_id: id, player_id: getPlayerId[0].id },
      })

      if (alreadyMember.length >= 1)
        return res.jsonBadRequest(
          null,
          'this member already joined this guild.'
        )

      const alreadyInvited = await guild_invites.findAll({
        where: { guild_id: id, player_id: getPlayerId[0].id },
      })

      if (alreadyInvited.length >= 1)
        return res.jsonBadRequest(null, 'this player already invited.')

      const invitePlayer = await guild_invites.create({
        player_id: playerExists.id,
        guild_id: id,
        date: Date.now(),
      })

      return res.jsonOK(invitePlayer)
    } else {
      return res.jsonBadRequest(
        null,
        getMessage('player.guild_invite_permission')
      )
    }
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
          model: players,
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

    const getPlayerHasInvite = await players.findAll({
      where: { account_id: account_id },
    })

    const getPlayerAccounts = getPlayerHasInvite.map((p) => p.id)

    const getAllInvites = await guild_invites.findAll({
      where: { guild_id: id, player_id: getPlayerAccounts },
      include: [
        {
          model: players,
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

    const playersToAccept = await players.findAll({
      where: { account_id: account_id },
    })

    const getPlayerAccounts = playersToAccept.map((p) => p.id)

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

/* guild settings */
router.post(
  '/:id/logo',
  checkJwt,
  uploadGuildLogo.single('guild_logo'),
  async (req, res) => {
    try {
      const { account_id } = req
      const { id } = req.params

      const findLeader = await players.findAll({
        where: { account_id: account_id },
      })

      const idToLeader = findLeader.map((l) => l.id)

      const getGuild = await guilds.findOne({
        where: { id, ownerid: idToLeader },
      })

      if (!getGuild)
        return res.jsonUnauthorized(
          null,
          getMessage('você não pode alterar pois não é lider dessa guild.')
        )

      const finalFileName = req.file

      await getGuild.update({
        // guild_logo: fs.readFileSync('uploads/guilds/' + finalFileName.filename),
        logo_gfx_name: `uploads/guilds/${finalFileName.filename}`,
      })

      res.jsonOK(getGuild, getMessage('Guild Logo successfully uploaded.'))
    } catch (error) {
      console.error(error)
      return res.jsonBadRequest(null, error)
    }
  }
)

router.put('/:id/description', checkJwt, async (req, res) => {
  try {
    const { account_id, body } = req
    const { id } = req.params
    const fields = ['description']

    const findLeader = await players.findAll({
      where: { account_id: account_id },
    })

    const idToLeader = findLeader.map((l) => l.id)

    const getGuild = await guilds.findOne({
      where: { id, ownerid: idToLeader },
    })

    if (!getGuild)
      return res.jsonUnauthorized(
        null,
        getMessage('você não pode alterar pois não é lider dessa guild.')
      )

    fields.map((fieldName) => {
      const newValue = body[fieldName]
      if (newValue) getGuild[fieldName] = newValue
    })

    await getGuild.save()

    res.jsonOK(getGuild, getMessage('account.settings.avatar_success'))
  } catch (error) {
    console.error(error)
    return res.jsonBadRequest(null, error)
  }
})

router.put('/:id/ranks', checkJwt, async (req, res) => {
  try {
    const { account_id, body } = req
    const { id } = req.params

    const findLeader = await players.findAll({
      where: { account_id: account_id },
    })

    const idToLeader = findLeader.map((leader) => leader.id)

    const getGuild = await guilds.findOne({
      where: { id, ownerid: idToLeader },
    })

    if (!getGuild)
      return res.jsonUnauthorized(
        null,
        getMessage('você não pode alterar pois não é lider dessa guild.')
      )

    const ranks = Object.entries(body)
    const destructionRanks = ranks.map((i) => i[1])

    const getRanks = await guild_ranks.findAll({
      where: { guild_id: id },
    })

    await Promise.all(
      destructionRanks.map((entry) =>
        guild_ranks.update({ name: entry.name }, { where: { id: entry.id } })
      )
    )

    res.jsonOK(getRanks, 'guild ranks altered successfully')
  } catch (error) {
    console.error(error)
    return res.jsonBadRequest(null, error)
  }
})

router.delete('/:id/disband', checkJwt, async (req, res) => {
  const { id } = req.params
  try {
    const getRanks = await guild_ranks.findAll({
      where: { guild_id: id },
    })

    const deleteGuild = await guilds.findByPk(id)

    if (!deleteGuild) {
      return res.jsonBadRequest(null, 'not possible delete board, try again.')
    } else {
      await Promise.all(
        getRanks.map((guild) =>
          guild_ranks.destroy({ where: { guild_id: guild.guild_id } })
        )
      )
      await deleteGuild.destroy()

      res.jsonOK(deleteGuild)
    }
  } catch (error) {
    // return res.jsonBadRequest(null, error)
    console.log(error)
  }
})

module.exports = router
