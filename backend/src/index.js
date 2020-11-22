const app = require("./app");
const db = require('./models')

db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log('***** Listening on port 3001')
	})
})