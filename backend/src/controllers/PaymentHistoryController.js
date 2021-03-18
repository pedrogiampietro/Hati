const express = require('express');
const { shop_orders } = require('../models');
const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');

const router = express.Router();

router.get('/getHistory', checkJwt, async (req, res) => {
  const { account_id } = req;

  const getOrders = await shop_orders.findAndCountAll({
    where: {
      account_id: account_id,
    },
  });

  if (!getOrders) return res.jsonBadRequest();

  return res.jsonOK(getOrders, getMessage('You list all orders;'));
});

module.exports = router;
