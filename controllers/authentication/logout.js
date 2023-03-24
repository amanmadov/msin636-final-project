exports.getLogout = async (req, res) => {
    res.render('layouts/authentication/logout', { layout: false, docTitle: 'FS LLC Intranet | Logged out' });
}