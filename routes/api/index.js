const router = require('express').Router();

router.use('/user', require('./UserRoutes'));
router.use('/chat', require('./ChatRoutes'));

module.exports = router;
