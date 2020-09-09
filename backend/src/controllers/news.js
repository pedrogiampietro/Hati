const express = require('express')
const { z_forum } = require('../models')
const { getMessage } = require('../helpers/messages')

const router = express.Router()

router.get('/', async (req, res) => {
	const dashboard = await z_forum.findAll({})

	return res.jsonOK(dashboard)
})

router.post('/create', async (req, res) => {
	const { account_id, body } = req

	const { post_topic, post_text } = body

	const createNews = await z_forum.create({
		post_topic: 'Testando a news',
		post_text: 'Aqui vai ficar o texto da news.',
	})

	return res.jsonOK(createNews)
})

module.exports = router
