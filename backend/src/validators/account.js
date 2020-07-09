const Joi = require('@hapi/joi')

const rules = {
    name: Joi.string().name().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
}

const accountSignUp = (req, res, next) => {
    const { name, password, password_confirmation } = req.body
    const schema = Joi.object({
        name: rules.name,
        password: rules.password,
        password_confirmation: rules.password_confirmation,
    })


module.exports = { accountSignUp }
