const Joi = require('@hapi/joi')
const { defaultOptions } = './default'
const { getValidatorError } = require('../helpers/validator')

const rules = {
	name: Joi.string().alphanum().min(6).max(30).required(),
	password: Joi.string().alphanum().min(3).max(30).required(),
	password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
	email: Joi.string().email().required(),
	characterName: Joi.string()
		.alphanum()
		.min(5)
		.max(21)
		.prefs({ convert: true })
		.required(),
}

const accountSignInValidator = (params) => {
	const { name, password } = params
	const schema = Joi.object({
		name: rules.name,
		password: rules.password,
	})

	return schema.validate({ name, password }, defaultOptions)
}

const validateAccountSignIn = (req, res, next) => {
	const { error } = accountSignInValidator(req.body)

	if (error) {
		const messages = getValidatorError(error, 'account.signin')
		return res.jsonBadRequest(null, null, { error: messages })
	}

	next()
}

const accountSignUpValidator = (params) => {
	const { name, password, password_confirmation, email } = params
	const schema = Joi.object({
		name: rules.name,
		password: rules.password,
		password_confirmation: rules.password_confirmation,
		email: rules.email,
	})

	return schema.validate({ name, password, password_confirmation, email }, defaultOptions)
}

const validateAccountSignUp = (req, res, next) => {
	const { error } = accountSignUpValidator(req.body)

	if (error) {
		const messages = getValidatorError(error, 'account.signup')
		return res.jsonBadRequest(null, null, { error: messages })
	}

	next()
}

const accountChangePasswordValidator = (params) => {
	const { password, password_confirmation } = params
	const schema = Joi.object({
		password: rules.password,
		password_confirmation: rules.password_confirmation,
	})

	return schema.validate(
		{ password, password_confirmation },
		defaultOptions
	)
}

const validateAccountChangePassword = (req, res, next) => {
	const { error } = accountChangePasswordValidator(req.body)

	if (error) {
		const messages = getValidatorError(error, 'account.signup')
		return res.jsonBadRequest(null, null, { error: messages })
	}

	next()
}

const createCharacterValidator = (params) => {
	const { name } = params
	const schema = Joi.object({
		name: rules.characterName,
	})

	return schema.validate({ name }, defaultOptions)
}

const validateCreateCharacter = (req, res, next) => {
	const { error } = createCharacterValidator(req.body)

	if (error) {
		const messages = getValidatorError(error, null)
		return res.jsonBadRequest(null, null, { error: messages })
	}

	next()
}

module.exports = {
	validateAccountSignUp,
	accountSignUpValidator,

	validateAccountSignIn,
	accountSignInValidator,

	validateCreateCharacter,
	createCharacterValidator,

	validateAccountChangePassword,
	accountChangePasswordValidator,
}
