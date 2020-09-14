const express = require('express')
const { z_forum, player } = require('../models')
const { getMessage } = require('../helpers/messages')

const router = express.Router()

/*
 **
 *** Posts ***
 **
 */

// buscando todas as news;

router.get('/', async (req, res) => {
	const group_id = 5

	const dashboard = await z_forum.findAll({
		include: [
			{
				model: player,
				required: true,

				where: {
					group_id: group_id,
				},
			},
		],
	})

	return res.jsonOK(dashboard)
})

// criando uma news nova;

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

/*
 **
 *** Comentários ***
 **
 */

// criando um novo comentário em um tópico;
router.post('/:postId/comment', async (req, res) => {
	//buscando um post;
	const post = await Post.findOne({ id: req.params.postId })

	//criando um novo comentário;
	const comment = new Comment()
	comment.content = req.body
	comment.post = post.id
	await comment.save()

	//associando um comentário a um post.
	post.comments.push(comment.id)
	await post.save()
	res.send(comment)
})

module.exports = router
