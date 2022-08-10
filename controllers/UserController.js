const validation = require('../utils/validation');
const BaseController = require('./BaseController');
const keys = require('../required_key/index');
const bcrypt = require('bcrypt');
const config = require('../config');
const {StatusCodes} = require('http-status-codes');
const TokenController = require('./TokenController');

class UserController extends BaseController {
  static async signup(req, res) {
    const requiredKey = keys.signup;
    try {
      const checkIsEmptyMessage = await validation([...requiredKey], {
        ...req.body,
      });
      if (checkIsEmptyMessage) {
        return res.status(StatusCodes.BAD_REQUEST).json(checkIsEmptyMessage);
      }

      await bcrypt
        .hash(req.body.password, config.bcrypt.saltRounds)
        .then((result) => {
          req.body.password = result;
        })
        .catch((error) => {
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        });

      const result = await super.create(req, 'User');
      return res.json(result);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
  static async signin(req, res) {
    const requiredKey = keys.signin;
    try {
      const checkIsEmptyMessage = await validation([...requiredKey], {
        ...req.body,
      });
      if (checkIsEmptyMessage) {
        return res.status(StatusCodes.BAD_REQUEST).json(checkIsEmptyMessage);
      }

      const user = await super.getByKey({email: req.body.email}, 'User');
      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json('User not found!');
      }

      await bcrypt.compare(req.body.password, user.password).catch(() => {
        return res.status(StatusCodes.UNAUTHORIZED).json('Wrong password!');
      });

      const token = await TokenController.createJWTToken(user);

      return res.json(token);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}

module.exports = UserController;
