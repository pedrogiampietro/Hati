const Joi = require('@hapi/joi')
const { getValidatorError } = require('../helpers/validator')

const rules = {
	name: Joi.string()
		.min(4)
		.max(21)
		.regex(/^(?!$)[a-zA-Z ]*$/)
		.required(),
}

const options = { abortEarly: false }

const createCharacter = (req, res, next) => {
	const { name } = req.body
	const schema = Joi.object({
		name: rules.name,
	})

	const { error } = schema.validate({ name }, options)

	if (error) {
		const messages = getValidatorError(error, 'player.createcharacter')
		return res.jsonBadRequest(null, null, { error: messages })
	}

	next()
}

module.exports = { createCharacter }
