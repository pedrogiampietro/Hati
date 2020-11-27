const express = require('express')
const { players_online, player } = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
	const getOnline = await players_online.findAndCountAll({
		include: [
			{
				model: player,
				attributes: ['name', 'level', 'vocation'],
			},
		],
	})

	return res.jsonOK(getOnline)
})

module.exports = router
