const express = require('express')
const encrypt = require('js-sha1')
const crypto = require('crypto')
const multer = require('multer')
const fs = require('fs')
const { promisify } = require('util')
const path = require('path')

const mailer = require('../services/mailer')

const { account } = require('../models')
const {
	accountSignUp,
	accountSignIn,
	accountChangePassword,
} = require('../validators/account')
const { getMessage } = require('../helpers/messages')
const {
	generateJwt,
	verifyJwt,
	generateRefreshJwt,
	verifyRefreshJwt,
	getTokenFromHeaders,
} = require('../helpers/jwt')

const { checkJwt } = require('../middlewares/jwt')

const { upload } = require('../middlewares/multer')

const router = express.Router()

router.post('/sign-in', accountSignIn, async (req, res) => {
	const { name, password } = req.body
	const accounts = await account.findOne({ where: { name } })

	const encryptedPassword = encrypt(password)

	const accountFound = await account.findOne({
		where: { name, password: encryptedPassword },
	})

	if (!accountFound)
		return res.jsonBadRequest(null, getMessage('account.signin.failed'))

	const token = generateJwt({ id: accounts.id })
	const refreshToken = generateRefreshJwt({
		id: accounts.id,
		version: accounts.jwtVersion,
	})

	return res.jsonOK(accounts, getMessage('account.signin.success'), {
		token,
		refreshToken,
	})
})

router.post('/sign-up', accountSignUp, async (req, res) => {
	const { name, password, email } = req.body

	const hash = crypto.createHash('sha1').update(password).digest('hex')

	const accounts = await account.findOne({ where: { name } })
	if (accounts)
		return res.jsonBadRequest(null, getMessage('account.signup.name_exists'))

	const emails = await account.findOne({ where: { email } })
	if (emails)
		return res.jsonBadRequest(null, getMessage('account.signup.email_exists'))

	const newAccount = await account.create({
		name,
		password: hash,
		email,
	})

	const token = generateJwt({ id: newAccount.id })
	const refreshToken = generateRefreshJwt({
		id: newAccount.id,
		version: newAccount.jwtVersion,
	})

	return res.jsonOK(newAccount, getMessage('account.signup.sucess'), {
		token,
		refreshToken,
	})
})

router.put('/password', checkJwt, accountChangePassword, async (req, res) => {
	const { body } = req
	const { password } = body
	const fields = ['password']
	const token = getTokenFromHeaders(req.headers)

	try {
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

		fields.map((fieldName) => {
			const newValue = body[fieldName]
			if (newValue) accounts[fieldName] = newValue
		})

		const hash = crypto.createHash('sha1').update(password).digest('hex')

		await accounts.update({
			password: hash,
		})

		return res.jsonOK(accounts, getMessage('account.settings.password.sucess'))
	} catch (error) {
		console.log(error)
	}
})

router.post('/forgot', async (req, res) => {
	const { email } = req.body
	try {
		const accounts = await account.findOne({ where: { email } })

		if (!accounts)
			return res.jsonBadRequest(
				null,
				getMessage('account.forgot_password.email_notexists')
			)

		const forgotToken = crypto.randomBytes(20).toString('hex')

		const now = new Date()
		now.setHours(now.getHours() + 1)

		await accounts.update({
			passwordResetToken: forgotToken,
			passwordResetExpires: now,
		})

		mailer.sendMail(
			{
				to: email,
				from: 'hatiaac@gmail.com',
				template: 'auth/forgot_password',
				context: { forgotToken },
			},
			(err) => {
				console.log(err)
				if (err)
					return res.jsonBadRequest(
						null,
						getMessage('response.json_server_error')
					)
			}
		)
		return res.jsonOK(email, getMessage('account.forgot_password.sucess'))
	} catch (error) {
		return res.jsonBadRequest(null, getMessage('response.json_server_error'))
	}
})

router.post('/reset', async (req, res) => {
	const { email, token, password } = req.body

	try {
		const accounts = await account.findOne({
			where: { email },
		})

		if (!accounts)
			return res.jsonBadRequest(
				null,
				getMessage('account.reset_password.email_notexists')
			)

		if (token !== accounts.passwordResetToken)
			return res.jsonUnauthorized(
				null,
				getMessage('account.reset_password.invalid_token')
			)

		const now = new Date()

		if (now > accounts.passwordResetExpires)
			return res.jsonBadRequest(
				null,
				getMessage('account.reset_password.passwordResetExpires')
			)

		const hash = crypto.createHash('sha1').update(password).digest('hex')

		await accounts.update({
			password: hash,
		})

		res.jsonOK(accounts)
	} catch (error) {
		console.log(error)
		return res.jsonBadRequest(null)
	}
})

router.put('/profile_info', checkJwt, async (req, res) => {
	const { body } = req
	const fields = ['rlname', 'location']
	const token = getTokenFromHeaders(req.headers)

	if (!token) {
		return res.jsonUnauthorized(null, getMessage('response.json_invalid_token'))
	}

	const decoded = verifyJwt(token)

	const accounts = await account.findByPk(decoded.id)
	if (!accounts)
		return res.jsonUnauthorized(null, getMessage('response.json_invalid_token'))

	fields.map((fieldName) => {
		const newValue = body[fieldName]
		if (newValue) accounts[fieldName] = newValue
	})

	await accounts.save()
	return res.jsonOK(accounts, getMessage('account.settings.profile_sucess'))
})

router.post('/profile_name', checkJwt, async (req, res) => {
	const { body } = req
	const { profileName } = body

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

		const checkProfileName = await account.findOne({ where: { profileName } })
		if (checkProfileName)
			return res.jsonBadRequest(
				null,
				getMessage('account.settings.profile_name_exists')
			)

		await accounts.update({
			profileName,
		})

		res.jsonOK(
			accounts.profileName,
			getMessage('account.settings.avatar_success')
		)
	} catch (error) {
		return res.jsonBadRequest(null, error)
	}
})

router.post('/refresh', async (req, res) => {
	const token = getTokenFromHeaders(req.headers)
	if (!token) {
		return res.jsonUnauthorized(null, getMessage('response.json_invalid_token'))
	}

	try {
		const decoded = verifyRefreshJwt(token)
		const accounts = await account.findByPk(decoded.id)
		if (!accounts)
			return res.jsonUnauthorized(
				null,
				getMessage('response.json_invalid_token')
			)

		if (decoded.version !== accounts.jwtVersion)
			return res.jsonUnauthorized(
				null,
				getMessage('response.json_invalid_token')
			)

		const meta = {
			token: generateJwt({ id: accounts.id }),
		}

		return res.jsonOK(null, null, meta)
	} catch (error) {
		return res.jsonUnauthorized(null, getMessage('response.json_invalid_token'))
	}
})

router.post('/avatar', checkJwt, upload.single('avatar'), async (req, res) => {
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

		const finalFileName = req.file

		await accounts.update({
			avatar: `uploads/${finalFileName.filename}`,
		})

		res.jsonOK(accounts, getMessage('account.settings.avatar_success'))
	} catch (error) {
		return res.jsonBadRequest(null, error)
	}
})

router.get('/avatar', checkJwt, async (req, res) => {
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

		const { avatar } = accounts

		if (avatar !== '') {
			const URL_AVATAR = `http://localhost:3001/${avatar}`
			res.jsonOK(URL_AVATAR)
		} else {
			res.jsonOK(accounts)
		}
	} catch (error) {
		return res.jsonBadRequest(null, error)
	}
})

router.delete('/avatarDelete', checkJwt, async (req, res) => {
	try {
		const token = getTokenFromHeaders(req.headers)

		if (!token) {
			return res.jsonUnauthorized(null, 'Invalid token')
		}

		const decoded = verifyJwt(token)

		const accounts = await account.findByPk(decoded.id)
		if (!accounts) return res.jsonUnauthorized(null, 'Invalid token.')

		const { avatar } = accounts
		if (avatar !== '') {
			await accounts.update({
				avatar: '',
			})

			const removeUpload = avatar.slice(8, avatar.length)

			promisify(fs.unlink)(
				path.resolve(__dirname, '..', '..', 'uploads', removeUpload)
			)

			res.jsonOK(accounts, 'avatar deletado.')
		} else {
			res.jsonBadRequest(null, 'não foi encontrado nenhum avatar.')
		}
	} catch (error) {
		return res.jsonBadRequest(null, error)
	}
})

module.exports = router
