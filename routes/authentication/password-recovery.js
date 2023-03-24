const router = require('express').Router()
const {getPasswordRecovery} = require('../../controllers/authentication/password-recovery');

router.get('/password-recovery', getPasswordRecovery);

module.exports = router;