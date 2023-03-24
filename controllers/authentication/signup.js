exports.getSignup = async (req, res) => {
    res.render('layouts/authentication/signup', { layout: false, docTitle: 'FS LLC Intranet | Sign Up Page' });
}