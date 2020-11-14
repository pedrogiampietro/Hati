const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt')

const checkJwt = (req, res, next) => {
	const { url: path } = req

	const name = req.url
	const board_id = name.replace('/forum/newThread/', '')
	const id = name.replace('/forum/post/edit/', '')

	const excludedPaths = [
		'/player/characters',
		'/account/dashboard',
		`/forum/newThread/${board_id}`,
		`/forum/post/edit/${id}`,
	]

	const isExcluded = !excludedPaths.find((p) => p.startsWith(path))
	if (isExcluded) return next()

	const token = getTokenFromHeaders(req.headers)

	if (!token) {
		return res.jsonUnauthorized(null, 'Invalid token')
	}

	try {
		const decoded = verifyJwt(token)
		req.account_id = decoded.id
		next()
	} catch (error) {
		return res.jsonUnauthorized(null, 'Invalid token')
	}
}

module.exports = checkJwt
