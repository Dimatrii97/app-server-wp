const jwt = require('jsonwebtoken');
// const faker = require('faker');
const SECRET = 'ref';

class Token {
  // REfresh
  checkRefreshToken(id, token) {
    return _refreshStore[id] === token;
  }
  clearRefreshToken(id) {
    delete _refreshStore[id];
  }
  getRefreshToken() {
    return faker.random.uuid();
  }

  //Access

  getAccessToken(payload) {
    return jwt.sign(payload, SECRET, {
      expiresIn: 1000 * 60,
    });
  }
  getAccessPayload(token) {
    if (token.includes(' ')) {
      token = this.tokenFromHeader(token);
    }
    return jwt.decode(token, SECRET);
  }
  AccessVerify(token) {
    return jwt.verify(token, SECRET);
  }
  tokenFromHeader(header) {
    return header.split(' ')[1];
  }

  // остальное

  checkAuth = (acces, refresh) => {
    if (refresh && acces) {
      const id = getAccessPayload().id;
      if (!checkRefreshToken(id, refresh)) {
        clearRefreshToken(id);
        return { ok: false };
      }
      return { ok: true, id };
    } else return { ok: false };
  };
}
module.exports = new Token();
