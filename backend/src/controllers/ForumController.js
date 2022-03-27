const express = require('express');
const {
  players,
  accounts,
  forum_board,
  threads,
  comments,
} = require('../models');
const { getMessage } = require('../helpers/messages');
const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt');
const { checkJwt } = require('../middlewares/jwt');

const router = express.Router();

/// clean code, start a new forum;

module.exports = router;
