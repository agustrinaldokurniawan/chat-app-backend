const jwt = require('jsonwebtoken');
const config = require('../config');
const {StatusCodes} = require('http-status-codes');

class TokenController {
  static async createJWTToken(payloads) {
    try {
      const token = jwt.sign({}, config.jwt_secret, {
        audience: payloads.email,
        subject: String(payloads._id),
        header: {
          alg: 'HS256',
          typ: 'JWT',
        },
      });
      return token;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  static async verifyJWTToken(req, res, next) {
    const {authorization} = req.headers;
    try {
      jwt.verify(authorization.split(' ')[1], config.jwt_secret, (err) => {
        if (err) {
          return res.status(StatusCodes.UNAUTHORIZED).json(err);
        }

        next();
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = TokenController;
