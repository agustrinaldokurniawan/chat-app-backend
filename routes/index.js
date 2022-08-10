const router = require('express').Router();

router.use('/api/v1', require('./api'));
router.get('/', (req, res) => {
  return res.json('Chat Api');
});

module.exports = router;
