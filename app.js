const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/path');

const publicRoutes = require('./routes/public');
const adminRoutes = require('./routes/admin');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin', adminRoutes);
app.use(publicRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page not found!'});
});

app.listen(port, () => {
    console.log('App running on port: ' + port);    
});