const express = require('express')
const { z_forum, player } = require('../models')
const { getMessage } = require('../helpers/messages')

const router = express.Router()

//=================================
//           Get all likes with news.
//=================================

router.get('/getLikes', async (req, res) => {
	const like = await z_forum.findAll({
		attributes: ['likes_count', 'id', 'author_aid'],
	})

	return res.jsonOK(like)
})

//=================================
//           Add a new like on news;
//=================================

router.post('/upLike/:id', async (req, res) => {
	const { id } = req.params
	const { name } = req.headers

	let likedPost = await z_forum.findOne({
		attributes: ['likes_count', 'id', 'author_aid'],
		where: { id: id },
	})

	const data = likedPost.dataValues.likes_count

	if (data.includes(name)) return res.status(400).send('Post already liked.')

	const newLike = await z_forum.update(
		{ likes_count: [...data, name] },
		{ where: { id } }
	)

	if (newLike) {
		likedPost = await z_forum.findOne({
			attributes: ['likes_count', 'id', 'author_aid'],
			where: { id: id },
		})
	}

	if (!likedPost) return res.jsonNotFound(null)

	return res.jsonOK(likedPost)
})

//=================================
//           Dislike on news;
//=================================

router.post('/disLike/:id', async (req, res) => {
	const { id } = req.params
	const { name } = req.headers

	let dislikedPost = await z_forum.findOne({
		attributes: ['likes_count', 'id', 'author_aid'],
		where: { id: id },
	})

	const data = dislikedPost.dataValues.likes_count

	if (!data.includes(name)) return res.status(400).send('Post not liked yet.')

	const array = data
	const index = array.indexOf(name)
	if (index > -1) {
		array.splice(index, 1)
	}

	const disLike = await z_forum.update(
		{ likes_count: array },
		{ where: { id } }
	)

	if (!dislikedPost) return res.jsonNotFound(null)

	return res.jsonOK(dislikedPost)
})

//=================================
//             Show all posts;
//=================================

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

//=================================
//             Create a new news;
//=================================

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

//=================================
//          Comments
//=================================

router.post('/:postId/comment', async (req, res) => {
	//buscando um post;
	const post = await z_forum.findOne({ id: req.params.postId })

	//criando um novo comentário;

	//associando um comentário a um post.
})

module.exports = router
