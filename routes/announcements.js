const router = require('express').Router()
const { getAnnouncements } = require('../controllers/announcements');

router.get('/announcements', getAnnouncements);

module.exports = router;