exports.getHome = async (req, res) => {
    res.render('layouts/main', { docTitle: 'Home Page'});
}