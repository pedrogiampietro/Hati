const express = require('express')
const {
  players,
  accounts,
  forum_board,
  threads,
  comments,
} = require('../models')
const { getMessage } = require('../helpers/messages')
const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt')
const { checkJwt } = require('../middlewares/jwt')

const router = express.Router()

// z_forum is too messy and confusing to work with, starting to make a 0 forum.

//crud borad.
router.get('/', checkJwt, async (req, res) => {
  const getAllBoards = await forum_board.findAll()

  return res.jsonOK(getAllBoards)
})

router.post('/', checkJwt, async (req, res) => {
  const { body } = req
  const { title, description } = body

  const createNewBoard = await forum_board.create({
    title,
    description,
  })

  return res.jsonOK(createNewBoard)
})

router.delete('/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  try {
    const deleteBoard = await forum_board.findByPk(id)

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
router.get('/thread/:board_id', checkJwt, async (req, res) => {
  const { board_id } = req.params

  const getThreads = await threads.findAll({
    where: { board_id },
    include: [
      {
        model: accounts,
        attributes: ['avatar'],
        include: [
          {
            model: players,
            attributes: ['group_id'],
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

router.post('/newThread/:board_id', checkJwt, async (req, res) => {
  const { account_id, body } = req
  const { board_id } = req.params
  const { character_name, title, body_text } = body

  const board = await forum_board.findByPk(board_id)
  if (!board) {
    return res.jsonBadRequest(null, 'Board not found.')
  }

  const createNewThread = await threads.create({
    character_name,
    title,
    body_text,
    board_id,
    account_id,
  })

  return res.jsonOK(createNewThread)
})

//missing delete thread, create later
router.delete('/thread/:board_id/', checkJwt, async (req, res) => {
  const { board_id } = req.params
  try {
    const findThreadToDelete = await threads.findByPk(board_id)
    if (!findThreadToDelete) {
      return res.jsonBadRequest(null, 'Board not found.')
    }

    if (!findThreadToDelete) {
      return res.jsonBadRequest(null, 'not possible delete board, try again.')
    } else {
      await findThreadToDelete.destroy()

      res.jsonOK(findThreadToDelete)
    }
  } catch (error) {
    return res.jsonBadRequest(null, error)
  }
})

//crud discussion
router.get('/thread/:board_id/:discussion', checkJwt, async (req, res) => {
  const { board_id, discussion } = req.params

  const getDiscussion = await threads.findOne({
    where: { id: discussion, board_id },

    include: [
      {
        model: accounts,
        attributes: ['avatar'],
        include: [
          {
            model: players,
            attributes: ['name', 'group_id'],
          },
        ],
      },
    ],
  })

  getDiscussion.increment({
    views: 1,
  })

  return res.jsonOK(getDiscussion)
})

router.put('/post/edit/:id', checkJwt, async (req, res) => {
  const { account_id, body } = req
  const { id } = req.params
  const fields = ['body_text']

  const getDiscussion = await threads.findOne({
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

router.get('/getLikes', checkJwt, async (req, res) => {
  const like = await threads.findAll({
    attributes: ['likes_count', 'id', 'character_name'],
  })

  return res.jsonOK(like)
})

//=================================
//         Add a new like on news;
//=================================

router.post('/upLike/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  const { name } = req.headers

  let likedPost = await threads.findOne({
    attributes: ['likes_count', 'id', 'account_id'],
    where: { id: id },
  })

  const data = likedPost.dataValues.likes_count

  if (data.includes(name)) return res.status(400).send('Post already liked.')

  const newLike = await threads.update(
    { likes_count: [...data, name] },
    { where: { id } }
  )

  if (newLike) {
    likedPost = await threads.findOne({
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

router.post('/disLike/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  const { name } = req.headers

  let dislikedPost = await threads.findOne({
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

  const disLike = await threads.update(
    { likes_count: array },
    { where: { id } }
  )

  if (!dislikedPost) return res.jsonNotFound(null)

  return res.jsonOK(dislikedPost)
})

//=================================
//          Comments
//=================================

router.get(
  '/thread/:board_id/:discussion/comments',
  checkJwt,
  async (req, res) => {
    const { discussion } = req.params

    const getComments = await comments.findAll({
      where: { thread_id: discussion },
      include: [
        {
          model: accounts,
          attributes: ['avatar'],
        },
      ],
    })

    return res.jsonOK(getComments)
  }
)

router.post(
  '/thread/:board_id/:discussion/reply',
  checkJwt,
  async (req, res) => {
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

      const findAccount = await accounts.findByPk(decoded.id)
      if (!findAccount)
        return res.jsonUnauthorized(
          null,
          getMessage('response.json_invalid_token')
        )

      const getDiscussion = await threads.findOne({
        where: { id: discussion, board_id },
      })
      if (!getDiscussion) return res.jsonNotFound(null)

      const createComment = await comments.create({
        post_content,
        character_name,
        account_id: decoded.id,
        thread_id: Number(board_id),
      })

      res.jsonOK(createComment, getMessage('comments added sucessfuly!'))
    } catch (error) {
      return res.jsonBadRequest(null, error)
    }
  }
)

module.exports = router
