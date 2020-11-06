const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt')

const checkJwt = (req, res, next) => {
	const { url: path } = req

	// const { vocation, skill, page } = req.query
	// const name = req.url
	// const newName = name.replace('/player/character/', '')

	const excludedPaths = ['/player/characters', '/account/dashboard', '/forum/newThread']

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
