const express = require('express')
const { player, guild } = require('../models')

const router = express.Router()

router.post('/', async (req, res) => {
	const { player_id } = req

	console.log(player_id)
})

// router.get('/')

//router.delete('/')

module.exports = router
