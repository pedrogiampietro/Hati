const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt');

module.exports = {
  checkJwt(req, res, next) {
    const token = getTokenFromHeaders(req.headers);

    if (!token) {
      return res.jsonUnauthorized(null, 'Invalid token');
    }

    try {
      const decoded = verifyJwt(token);
      req.account_id = decoded.id;
    } catch (err) {
      return res.status(400).json(err);
    }

    next();
  },
};
