const path = require('path')
const nodemailer = require('nodemailer')
const SMTP_CONFIG = require('../config/config')
const hbs = require('nodemailer-express-handlebars')

const transport = nodemailer.createTransport({
	host: SMTP_CONFIG.mailer.host,
	port: SMTP_CONFIG.mailer.port,
	secure: false,
	auth: {
		user: SMTP_CONFIG.mailer.user,
		pass: SMTP_CONFIG.mailer.pass,
	},
	tls: {
		rejectUnauthorized: false,
	},
})

transport.use(
	'compile',
	hbs({
		viewEngine: {
			defaultLayout: undefined,
			partialsDir: path.resolve('./src/resources/mail/'),
		},
		viewPath: path.resolve('./src/resources/mail/'),
		extName: '.html',
	})
)

module.exports = transport
