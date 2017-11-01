const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');
const mouvement = require('./server/routes/mouvement.js')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/meanBanque')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err))


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
// API location
app.use('/mouvement', mouvement);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
