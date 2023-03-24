const router = require('express').Router()
const { getConfirmMail } = require('../../controllers/authentication/confirm-mail');

router.get('/confirm-mail', getConfirmMail);

module.exports = router;