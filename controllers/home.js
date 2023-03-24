exports.getHome = async (req, res) => {
    res.render('layouts/main', { docTitle: 'FS Consulting LLC | Intranet'});
}