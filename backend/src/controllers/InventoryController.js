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

router.post('/sendItem', checkJwt, async (req, res) => {
  const { body } = req;
  const {
    name,
    inventoryItem: { id, itemid, item_amount, status, sended_to },
  } = body;

  console.log(name, itemid, item_amount, status);

  // logically to send the item to the character

  const getItemOnInventory = await shop_inventories.findOne({
    where: { id: id },
  });

  if (!getItemOnInventory)
    return jsonNotFound(null, getMessage('This item not exists.'));

  getItemOnInventory.update({
    sended_to: name,
    status: 'delivered',
  });

  console.log(getItemOnInventory);
});

module.exports = router;
