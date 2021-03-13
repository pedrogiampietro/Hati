const express = require('express');
const {} = require('../models');

const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');

const router = express.Router();

router.post('/creditcard', checkJwt, async (req, res) => {
  const { body } = req;
  console.log(body);
});

module.exports = router;
