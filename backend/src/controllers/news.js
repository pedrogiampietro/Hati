const express = require('express')
const { z_forum, player } = require('../models')
const { getMessage } = require('../helpers/messages')

const router = express.Router()

router.get('/', async (req, res) => {
	const dashboard = await z_forum.findAll({
		include: [
			{
				model: player,
				required: true,
			},
		],
	})

	return res.jsonOK(dashboard)
})

router.post('/create', async (req, res) => {
	const { body } = req

	const { post_topic, post_text, author_aid, author_guid } = body

	const createNews = await z_forum.create({
		author_guid,
		author_aid,
		post_topic,
		post_text,
	})

	return res.jsonOK(createNews)
})

module.exports = router
