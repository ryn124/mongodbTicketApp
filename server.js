var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var tickets = require('./routes/tickets');
var shows = require('./routes/shows');
var artists = require('./routes/artists');
var tours = require('./routes/tours');
var seed = require('./routes/seed');

var app = express();

// load the env vars
require('dotenv').load();

// connect to MongoDB with mongoose
require('./config/database');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', users);
app.use('/api/tickets', tickets);
app.use('/api/shows', shows);
app.use('/api/artists', artists);
app.use('/api/tours', tours);
app.use('/api/seed', seed);

module.exports = app;
