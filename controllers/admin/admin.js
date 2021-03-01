exports.getIndex = (req, res, next) => {
    res.render('admin/index', { pageTitle: 'Admin page' });
};

exports.getGenres = (req, res, next) => {
    res.render('admin/genre/genres', { 
        pageTitle: 'Genres'
     });
};