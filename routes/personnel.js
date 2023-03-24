const router = require('express').Router()
const { getPersonnel } = require('../controllers/personnel');

router.get('/personnel', getPersonnel);

module.exports = router;