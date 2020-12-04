const Joi = require('@hapi/joi')
const { defaultOptions } = './default'
const { getValidatorError } = require('../helpers/validator')

const rules = {
	name: Joi.string()
		.min(4)
		.max(21)
		.regex(/^(?!$)[a-zA-Z ]*$/)
		.required(),
}

const createCharacterValidator = (params) => {
	const { name } = params
	const schema = Joi.object({
		name: rules.name,
	})

	return schema.validate({ name }, defaultOptions)
}

const validateCreateCharacter = (req, res, next) => {
	const { error } = createCharacterValidator(req.body)

	if (error) {
		const messages = getValidatorError(error, 'player.createcharacter')
		return res.jsonBadRequest(null, null, { error: messages })
	}

	next()
}

module.exports = { validateCreateCharacter, createCharacterValidator }
