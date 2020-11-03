const express = require('express')
const { z_forum, player, account, forumBoard, threads } = require('../models')
const { getMessage } = require('../helpers/messages')

const router = express.Router()

const topics = {
	'last-news': '1',
	discussions: '2',
	'off-topic': '3',
	tutorials: '4',
	'bug-report': '5',
	'dev-atts': '6',
	trade: '7',
}

// Helper functions

function getCategoryFromTopic(topic) {
	return topics[topic]
}

function topicExists(topic) {
	return Object.keys(topics).includes(topic)
}

// z_forum is too messy and confusing to work with, starting to make a 0 forum.

//crud borad.
router.get('/', async (req, res) => {
	const getAllBoards = await forumBoard.findAll()

	return res.jsonOK(getAllBoards)
})

router.post('/', async (req, res) => {
	const { body } = req
	const { title, description } = body

	const createNewBoard = await forumBoard.create({
		title,
		description,
	})

	return res.jsonOK(createNewBoard)
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const deleteBoard = await forumBoard.findByPk(id)

		if (!deleteBoard) {
			return res.jsonBadRequest(null, 'não foi possivel deletar o board.')
		} else {
			await deleteBoard.destroy()

			res.jsonOK(deleteBoard)
		}
	} catch (error) {
		return res.jsonBadRequest(null, error)
	}
})

//crud threads
router.get('/:threads', async (req, res) => {
	const getThreads = await threads.findAll()

	return res.jsonOK(getThreads)
})

router.post('/:treads', async (req, res) => {
	const { body } = req
	const { title, body_text } = body
	const createNewThread = await threads.create({
		title,
		body_text,
	})

	return res.jsonOK(createNewThread)
})

//=================================
//           Category Routes
//=================================

router.get('/:section', async (req, res) => {
	const { section } = req.params
	const convert = parseInt(getCategoryFromTopic(section))

	const getThred = await z_forum.findAll({
		// order: [
		// 	['last_post', 'ASC'],
		// 	['last_post', 'DESC'],
		// ],
		where: { section: convert },

		include: [
			{
				model: player,
				attributes: ['name', 'group_id'],
				include: [
					{
						model: account,
						attributes: ['avatar'],
					},
				],
			},
		],
	})

	return res.jsonOK(getThred)
})

//=================================
//        Get Discussion topic.
//=================================

router.get('/:discussion', async (req, res) => {
	const { section } = req.params
	const convert = parseInt(getCategoryFromTopic(section))

	const getThred = await z_forum.findAll({
		where: { section: convert },

		include: [
			{
				model: player,
				attributes: ['name', 'group_id'],
				include: [
					{
						model: account,
						attributes: ['avatar'],
					},
				],
			},
		],
	})

	return res.jsonOK(getThred)
})

//=================================
//        Get all likes with news.
//=================================

router.get('/getLikes', async (req, res) => {
	const like = await z_forum.findAll({
		attributes: ['likes_count', 'id', 'author_aid'],
	})

	return res.jsonOK(like)
})

//=================================
//         Add a new like on news;
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
	const forumPost = await z_forum.findAll({
		include: [
			{
				model: player,
				required: true,
			},
		],
	})

	return res.jsonOK(forumPost)
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
