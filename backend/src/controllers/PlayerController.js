const express = require('express')
const db = require('../models')

const { validateCreateCharacter } = require('../validators/player')
const { getMessage } = require('../helpers/messages')
const { checkJwt } = require('../middlewares/jwt')

const router = express.Router()

router.get('/characters', checkJwt, async (req, res) => {
  const { account_id } = req
  const allPlayersInAccount = await db.cacher.model('players').findAll({
    where: { account_id: account_id },

    include: [
      {
        model: db.accounts,
        attributes: [
          'name',
          'email',
          'type',
          'creation',
          'premdays',
          'rlname',
          'location',
          'flag',
          'avatar',
          'profileName',
          'page_access',
        ],
      },
    ],
  })

  return res.jsonOK(allPlayersInAccount)
})

router.get('/character/:name', async (req, res) => {
  const { name } = req.params
  const limit = 5

  const searchCharacter = await db.cacher.model('players').findAndCountAll({
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
        model: db.player_deaths,
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

  if (searchCharacter.count === 0) {
    return res.jsonBadRequest(
      null,
      getMessage('character.search.name_not_exists')
    )
  }

  return res.jsonOK(searchCharacter)
})

router.get('/highscores', async (req, res) => {
  const { vocation, page } = req.query

  let filterVocation = Number(vocation)
  let highscoresPlayer
  const pageSize = page
  const limit = 10
  const offset = Number(pageSize) * limit

  if (vocation === 'all') {
    highscoresPlayer = await db.cacher.model('players').findAll({
      limit,
      offset: offset,

      order: [
        ['level', 'DESC'],
        ['name', 'ASC'],
      ],
    })
  } else {
    highscoresPlayer = await db.cacher.model('players').findAll({
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

  return res.jsonOK(highscoresPlayer)
})

router.get('/:id', async (req, res) => {
  const { account_id } = req
  const { id } = req.params
  const getCharacterAccount = await db.players.findOne({
    where: { id: id, account_id: account_id },
  })
  if (!getCharacterAccount) return res.jsonNotFound(null)

  return res.jsonOK(getCharacterAccount)
})

router.post('/', checkJwt, validateCreateCharacter, async (req, res) => {
  const { account_id, body } = req
  const { name, vocation, sex } = body

  const findCharacter = await db.players.findOne({ where: { name } })
  if (findCharacter)
    return res.jsonBadRequest(
      null,
      getMessage('player.createcharacter.name_exists')
    )

  const createCharacter = await db.players.create({
    name,
    account_id,
    vocation,
    sex,
    looktype: 128,
  })

  return res.jsonOK(
    createCharacter,
    getMessage('player.createcharacter.success')
  )
})

router.put('/:id', async (req, res) => {
  const { account_id, body } = req
  const { id } = req.params

  const fields = ['name'] //['name', 'comments', 'outfits', 'items']

  const editAccountInformation = await db.players.findOne({
    where: { id: id, account_id: account_id },
  })
  if (!editAccountInformation) return res.jsonNotFound(null)

  fields.map((fieldName) => {
    const newValue = body[fieldName]
    if (newValue) editAccountInformation[fieldName] = newValue
  })

  await editAccountInformation.save()
  return res.jsonOK(editAccountInformation)
})

router.delete('/:id', async (req, res) => {
  const { account_id } = req
  const { id } = req.params
  const deleteCharacter = await db.players.findOne({
    where: { id: id, account_id: account_id },
  })
  if (!deleteCharacter) return res.jsonNotFound(null)

  await deleteCharacter.destroy()
  return res.jsonOK()
})

module.exports = router
