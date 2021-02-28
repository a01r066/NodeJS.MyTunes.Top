exports.getIndex = (req, res, next) => {
    res.render('public/index', { pageTitle: 'Public page' });
};