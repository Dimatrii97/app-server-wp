const Token = require('../token/index');
function authUser(req, res, next) {
  const acces = req.header('Authorization');
  if (acces) {
    const token = Token.tokenFromHeader(acces);
    try {
      const decoded = Token.AccessVerify(token);
      next();
      return;
    } catch (err) {
      res.status(401).json({ error: 'token устарел' });
      return;
    }
  }
  res.status(401).json({ error: 'token устарел' });
}

module.exports.authUser = authUser;
