var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');
const api = require('./routes/api');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 连接数据库
// mongoose.connect(process.env.MONGO_URI || `mongodb://localhost:27017/test`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   user: process.env.MONGO_USER,
//   pass: process.env.MONGO_PASSWORD
// });
mongoose.connect(`mongodb://localhost:27017/test`);

// CORS config here
app.all('/*', function(req, res, next){
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,POST,DELETE,OPTIONS,PUT');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if(req.method == 'OPTIONS'){
    res.status(200).end();
  }
  else{
    next();
  }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/v1', api);

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
  res.render('error');
});

module.exports = app;
