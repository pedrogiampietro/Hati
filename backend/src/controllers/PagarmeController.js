const express = require('express');
const pagarme = require('pagarme');

const { shop_orders } = require('../models');

const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');

const router = express.Router();

/*
    billing => dados de cobrança
    shipping => dados de envio
*/

/*
  4111111111111111
  Morpheus Fishburne
  0922
  123
*/

router.get('/total', async (req, res) => {
  pagarme.client
    .connect({ api_key: process.env.PAGARME_API_KEY_TEST })
    .then((client) => client.balance.primary())
    .then((balance) => {
      return res.send(balance);
    });
});

router.post('/creditcard', checkJwt, async (req, res) => {
  const { body } = req;
  const {
    amount,
    card_holder_name,
    card_expiration_date,
    card_number,
    card_cvv,

    customer,
    shipping,
    billing,
    items,
  } = body;

  pagarme.client
    .connect({ api_key: process.env.PAGARME_API_KEY_TEST })
    .then((client) =>
      client.transactions.create({
        amount: amount,
        card_number: card_number,
        card_cvv: card_cvv,
        card_expiration_date: card_expiration_date,
        card_holder_name: card_holder_name,
        postback_url: process.env.SERVER_URL + '/postback/pagarme-card',
        customer: customer,
        billing: billing,
        shipping: shipping,
        items: items,
      })
    )
    .then((transaction) => {
      const addToOrders = shop_orders.create({
        account_id: Number(transaction.customer.external_id),
        address: `${transaction.shipping.address.neighborhood} - ${transaction.shipping.address.street} - ${transaction.shipping.address.street_number}`,
        status: transaction.status,
      });

      return res.json({ transaction: transaction });
    })
    .catch((err) => {
      console.log(err.response.errors);
      // console.log(err);
    });
});

module.exports = router;
