const Joi = require('@hapi/joi')
const { getValidatorError } = require('../helpers/validator')

const rules = {
    name: Joi.string().alphanum().min(6).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
}

const options = { abortEarly: false }

const accountSignIn = (req, res, next) => {
    const { name, password } = req.body
    const schema = Joi.object({
        name: rules.name,
        password: rules.password
    })

    
    const { error } = schema.validate({ name, password }, options)
       
    if (error) {

            const messages = getValidatorError(error, 'account.signin')
            return res.jsonBadRequest(null, null, { error: messages })
        }

    next()

}

const accountSignUp = (req, res, next) => {
    const { name, password, password_confirmation } = req.body
    const schema = Joi.object({
        name: rules.name,
        password: rules.password,
        password_confirmation: rules.password_confirmation,
    })

    const { error } = schema.validate({ name, password, password_confirmation }, options)

    if (error) {

        const messages = getValidatorError(error, 'account.signup')
        return res.jsonBadRequest(null, null, { error: messages })
    }

    next()

}

module.exports = { accountSignUp, accountSignIn }
