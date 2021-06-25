var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');

require('dotenv').config();

var app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    const lang = req.headers.lang || 'en';
    req.lang = lang;
    return next();
});
app.get('/', (req, res) => {
    res.render('index', { title: 'Title' });
});
app.use('/api', require('./index'));

// catch 404 and forwarsds to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;

    // render the error panpm ge
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
