const express = require('express');
const pagarme = require('pagarme');
const qs = require('qs');

const { shop_orders } = require('../models');

const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');

const router = express.Router();

router.post('/pagarme-card', checkJwt, async (req, res) => {
  const apiKey = process.env.API_KEY_PAGARME;
  const verifyBody = qs.stringify(req.body);
  const signature = req.headers['x-hub-signature'].replace('sha1=', '');

  if (!pagarme.postback.verifySignature(apiKey, verifyBody, signature)) {
    return res.status(400).json({ error: 'Invalid Postback' });
  }

  try {
    const { body } = req;

    const {
      current_status,
      transaction: { id, paid_amount },
    } = body;

    const findTransaction = await shop_orders.findOne({ where: { id: id } });
    if (!findTransaction) return jsonBadRequest(null);

    await findTransaction.update({
      paid_value: paid_amount,
      status: current_status,
    });

    res.jsonOK(findTransaction, 'Thanks for letting me know! :)');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
