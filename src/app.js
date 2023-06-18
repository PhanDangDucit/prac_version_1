const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 30000;
// static file
app.use(express.static(path.join(__dirname, 'public')));
// Morgan logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// Express app --> route tinh tu view
app.post('/news', (req, rep) => {rep.render('news')});// dinh nghia post method
app.get('/search', (req, rep) => {rep.render('search')});
app.get('/news', (req, rep) => {rep.render('news')});
app.get('/', (req, rep) => rep.render('home'));

app.listen(port);