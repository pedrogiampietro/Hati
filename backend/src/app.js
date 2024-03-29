const express = require('express');
const cors = require('cors');
const db = require('./models');
const authController = require('./controllers/AuthController');
const playerController = require('./controllers/PlayerController');
const forumController = require('./controllers/ForumController');
const guildController = require('./controllers/GuildController');
const onlineController = require('./controllers/OnlineController');
const shopOfferController = require('./controllers/ShopOfferController');
const inventoryController = require('./controllers/InventoryController');
const pagarmeController = require('./controllers/PagarmeController');
const postBackController = require('./controllers/PostBackController');
const paymentHistoryController = require('./controllers/PaymentHistoryController');
const PixGerenciaNetController = require('./controllers/PixGerenciaNetController');

const response = require('./middlewares/response');
// const loginService = require('./login');
const path = require('path');

const app = express();
// loginService();

app.use((_, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,PATCH'
  );
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  response.header('Access-Control-Expose-Headers', 'x-total-count');

  return next();
});

app.use(cors());
app.use(response);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use('/account', authController);
app.use('/player', playerController);
app.use('/forum', forumController);
app.use('/guild', guildController);
app.use('/online', onlineController);
app.use('/shop', shopOfferController);
app.use('/inventory', inventoryController);
app.use('/pagarme', pagarmeController);
app.use('/postback', postBackController);
app.use('/paymentHistory', paymentHistoryController);
app.use('/pix', PixGerenciaNetController);

app.get('/', (req, res) => {
  return res.json('OK');
});

module.exports = app;
