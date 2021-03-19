const express = require('express');
const pagarme = require('pagarme');
const qs = require('qs');

const { shop_orders, accounts } = require('../models');

const { getMessage } = require('../helpers/messages');

const router = express.Router();

router.post('/pagarme-card', async (req, res) => {
  const { body } = req;
  const {
    'transaction[customer][external_id]': transactionCustomerExternalId,
    'transaction[paid_amount]': transactionCustomerPaidAmount,
    'transaction[items][0][quantity]': transactionItemQuantity,
    'transaction[items][0][id]': transactionItemAccountID,
    current_status,
  } = body;

  const apiKey = process.env.PAGARME_API_KEY_TEST;
  const verifyBody = qs.stringify(req.body);
  const signature = req.headers['x-hub-signature'].replace('sha1=', '');

  if (!pagarme.postback.verifySignature(apiKey, verifyBody, signature)) {
    return res.status(400).json({ error: 'Invalid Postback' });
  }

  try {
    const findTransaction = await shop_orders.findOne({
      where: { transaction_id: transactionCustomerExternalId },
    });
    if (!findTransaction)
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );

    const findAccount = await accounts.findOne({
      where: { id: transactionCustomerExternalId },
    });

    switch (current_status) {
      case 'paid':
        // fazer logica de pagamento aceito;
        await findTransaction.update({
          paid_value: transactionCustomerPaidAmount,
          status: current_status,
        });

        const findAccount = await accounts.findOne({
          where: { id: transactionItemAccountID },
        });

        if (!findAccount)
          return res.jsonUnauthorized(
            null,
            getMessage('response.json_invalid_token')
          );

        findAccount.increment({
          coins: transactionItemQuantity,
        });

        break;
      case 'refunded':
        // fazer logica de pagamento devolvido;
        await findTransaction.update({
          paid_value: transactionCustomerPaidAmount,
          status: current_status,
        });
        break;
      case 'refused':
        // fazer logica de pagamento recusado;
        await findTransaction.update({
          paid_value: transactionCustomerPaidAmount,
          status: current_status,
        });
        break;
      default:
        // outros status aguardar ou não.
        await findTransaction.update({
          status: current_status,
        });
        break;
    }

    return res.jsonOK(findTransaction, 'Thanks for letting me know! :)');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
