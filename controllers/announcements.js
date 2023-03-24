exports.getAnnouncements = async (req, res) => {
    res.render('layouts/pages/announcements', { docTitle: 'FS Consulting LLC | Announcements' });
}