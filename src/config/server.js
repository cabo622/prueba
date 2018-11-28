const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');

const newsRoutes = require('../app/routes/news');
const usersRoutes = require('../app/routes/users');
const app = express();





app.use(session({
  secret: 'secretsecret secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', usersRoutes);
app.use('/', newsRoutes);
module.exports = app;