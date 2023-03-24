exports.getHome = async (req, res) => {
    res.render('layouts/pages/homepage', { docTitle: 'FS Consulting LLC | Intranet'});
}