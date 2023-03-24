const router = require('express').Router()
const {getLogout} = require('../../controllers/authentication/logout');

router.get('/logout', getLogout);

module.exports = router;