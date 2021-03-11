const express = require('express');
const { shop_inventories } = require('../models');

const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');

const router = express.Router();

router.get('/', checkJwt, async (req, res) => {
  const { account_id } = req;

  const getInventory = await shop_inventories.findAll({
    where: { account_id: account_id },
    order: [['itemid', 'ASC']],
  });

  return res.jsonOK(getInventory);
});

module.exports = router;
