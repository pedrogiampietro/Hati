const app = require('./app');
const db = require('./models');

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log('***** Listening on port 3001');
  });
});
