const express = require('express')
const { player, account, forumBoard, thread, comment } = require('../models')
const { getMessage } = require('../helpers/messages')
const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt')

const router = express.Router()

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
			return res.jsonBadRequest(null, 'not possible delete board, try again.')
		} else {
			await deleteBoard.destroy()

			res.jsonOK(deleteBoard)
		}
	} catch (error) {
		return res.jsonBadRequest(null, error)
	}
})

//crud threads
router.get('/thread/:board_id', async (req, res) => {
	const { board_id } = req.params

	const getThreads = await thread.findAll({
		where: { board_id },
		include: [
			{
				model: account,
				attributes: ['avatar'],
				include: [
					{
						model: player,
						attributes: ['name', 'group_id'],
					},
				],
			},
		],

		order: [
			['createdAt', 'DESC'],
			['createdAt', 'ASC'],
		],
	})

	return res.jsonOK(getThreads)
})

router.post('/newThread', async (req, res) => {
	const { account_id, body } = req
	const { character_name, title, body_text, board_id } = body

	const board = await forumBoard.findByPk(board_id)
	if (!board) {
		return res.jsonBadRequest(null, 'Board not found.')
	}

	const createNewThread = await thread.create({
		character_name,
		title,
		body_text,
		board_id,
		account_id,
	})

	return res.jsonOK(createNewThread)
})

//missing delete thread, create later

//crud discussion
router.get('/thread/:board_id/:discussion', async (req, res) => {
	const { board_id, discussion } = req.params

	const getDiscussion = await thread.findOne({
		where: { id: discussion, board_id },
		include: [
			{
				model: account,
				attributes: ['avatar'],
				include: [
					{
						model: player,
						attributes: ['name', 'group_id'],
					},
				],
			},
		],
	})

	return res.jsonOK(getDiscussion)
})

router.put('/post/edit/:id', async (req, res) => {
	const { account_id, body } = req
	const { id } = req.params
	const fields = ['body_text']

	const getDiscussion = await thread.findOne({
		where: { id: id, account_id: account_id },
	})
	if (!getDiscussion) return res.jsonNotFound(null)

	fields.map((fieldName) => {
		const newValue = body[fieldName]
		if (newValue) getDiscussion[fieldName] = newValue
	})

	await getDiscussion.save()
	return res.jsonOK(getDiscussion, getMessage('post edited sucessfuly!'))
})

//=================================
//        Get all likes with news.
//=================================

router.get('/getLikes', async (req, res) => {
	const like = await thread.findAll({
		attributes: ['likes_count', 'id', 'character_name'],
	})

	return res.jsonOK(like)
})

//=================================
//         Add a new like on news;
//=================================

router.post('/upLike/:id', async (req, res) => {
	const { id } = req.params
	const { name } = req.headers

	let likedPost = await thread.findOne({
		attributes: ['likes_count', 'id', 'account_id'],
		where: { id: id },
	})

	const data = likedPost.dataValues.likes_count

	if (data.includes(name)) return res.status(400).send('Post already liked.')

	const newLike = await thread.update(
		{ likes_count: [...data, name] },
		{ where: { id } }
	)

	if (newLike) {
		likedPost = await thread.findOne({
			attributes: ['likes_count', 'id', 'account_id'],
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

	let dislikedPost = await thread.findOne({
		attributes: ['likes_count', 'id', 'account_id'],
		where: { id: id },
	})

	const data = dislikedPost.dataValues.likes_count

	if (!data.includes(name)) return res.status(400).send('Post not liked yet.')

	const array = data
	const index = array.indexOf(name)
	if (index > -1) {
		array.splice(index, 1)
	}

	const disLike = await thread.update({ likes_count: array }, { where: { id } })

	if (!dislikedPost) return res.jsonNotFound(null)

	return res.jsonOK(dislikedPost)
})

//=================================
//          Comments
//=================================

router.post('/thread/:board_id/:discussion/reply', async (req, res) => {
	const { body } = req
	const { post_content, character_name } = body
	const { board_id, discussion } = req.params

	try {
		const token = getTokenFromHeaders(req.headers)

		if (!token) {
			return res.jsonUnauthorized(
				null,
				getMessage('response.json_invalid_token')
			)
		}

		const decoded = verifyJwt(token)

		const accounts = await account.findByPk(decoded.id)
		if (!accounts)
			return res.jsonUnauthorized(
				null,
				getMessage('response.json_invalid_token')
			)

		const getDiscussion = await thread.findOne({
			where: { id: discussion, board_id },
		})
		if (!getDiscussion) return res.jsonNotFound(null)

		const createComment = await comment.create({
			post_content,
			character_name,
			account_id: decoded.id,
			thread_id: Number(board_id),
		})

		res.jsonOK(createComment, getMessage('comments added sucessfuly!'))
	} catch (error) {
		return res.jsonBadRequest(null, error)
	}
})

module.exports = router
