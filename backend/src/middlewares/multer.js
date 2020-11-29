const multer = require('multer')

// File upload middleware (for profile pictures)
const storage = multer.diskStorage({
	destination: 'uploads/',
	filename: (req, file, cb) => {
		const filename = file.originalname
		const finalFileName = `${Date.now()}-${filename}`

		cb(null, finalFileName)
	},
})

const upload = multer({
	storage: storage,
	limits: { fileSize: 2 * 1024 * 1024 },
	fileFilter: (req, file, cb) => {
		const allowedMimes = [
			'image/png',
			'image/jpg',
			'image/gif',
			'image/jpeg',
			'images/pjpeg',
		]

		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true)
		} else {
			cb(new Error('invalid file type.'))
		}
	},
})

// File upload middleware (for guild logo)
const guildLogo = multer.diskStorage({
	destination: 'uploads/guilds/',
	filename: (req, file, cb) => {
		const filename = file.originalname
		const finalFileName = `guildLogo-${Date.now()}-${filename}`

		cb(null, finalFileName)
	},
})

const uploadGuildLogo = multer({
	storage: guildLogo,
	limits: { fileSize: 2 * 1024 * 1024 },
	fileFilter: (req, file, cb) => {
		const allowedMimes = [
			'image/png',
			'image/jpg',
			'image/gif',
			'image/jpeg',
			'images/pjpeg',
		]

		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true)
		} else {
			cb(new Error('invalid file type.'))
		}
	},
})

module.exports = {
	storage,
	upload,
	guildLogo,
	uploadGuildLogo,
}
