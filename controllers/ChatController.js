const BaseController = require('./BaseController');
const {StatusCodes} = require('http-status-codes');

class ChatController extends BaseController {
  static async getChatList(req, res) {
    try {
      return res.json('get chat list');
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}

module.exports = ChatController;
