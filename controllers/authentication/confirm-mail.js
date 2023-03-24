exports.getConfirmMail = async (req, res) => {
    res.render('layouts/authentication/confirm-mail', { layout: false, docTitle: 'FS LLC Intranet | Confirm Mail' });
}