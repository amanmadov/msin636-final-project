const router = require('express').Router()
const { getRankings } = require('../controllers/rankings');

router.get('/rankings', getRankings);

module.exports = router;