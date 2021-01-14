const express = require('express')
const {
  players_online,
  players,
  guild_membership,
  guilds,
} = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
  const getOnline = await players_online.findAndCountAll({
    include: [
      {
        model: players,
        attributes: ['name', 'level', 'vocation'],
      },
      {
        model: guild_membership,
        include: [{ model: guilds }],
      },
    ],
  })

  return res.jsonOK(getOnline)
})

module.exports = router
