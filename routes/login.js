const router = require('express').Router()
const {getLogin} = require('../controllers/login');

router.get('/login', getLogin);

module.exports = router;