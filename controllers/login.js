exports.getLogin = async (req, res) => {
    res.render('layouts/authentication/login', { layout: false, docTitle: 'FS LLC Intranet | Login Page' });
}