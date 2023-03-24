exports.getPasswordRecovery = async (req, res) => {
    res.render('layouts/authentication/password-recovery', { layout: false, docTitle: 'FS LLC Intranet | Password Recovery Page' });
}