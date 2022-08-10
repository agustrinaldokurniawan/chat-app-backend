const ChatController = require('../../controllers/ChatController');
const TokenController = require('../../controllers/TokenController');

const router = require('express').Router();

router.get('/', TokenController.verifyJWTToken, ChatController.getChatList);

module.exports = router;
