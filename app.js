require('dotenv').config();
// var keys = require('./keys.js');
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const routes = require('./routes')
// var index = require('./routes/index');
// var users = require('./routes/api/user');

const PORT = process.env.PORT || 3000;
var app = express();

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

// app.use('/', index);
// app.use('/users', users);
app.use(routes);

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

mongoose.Promise = global.Promise;
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, function(error) {
  if (error) {
    console.error(`Error Connecting to MongoDB: ${error}`);
  }
  else {
    console.log("Successfull connection to MongoDB");
  }
});
// mongoose.connect("mongodb://localhost/mi-concierge", function(error) {
//   if (error) {
//     console.error(`Error Connecting to MongoDB: ${error}`);
//   }
//   else {
//     console.log("Successfull connection to MongoDB");
//   }
// });

app.listen(PORT, function() {
  console.log(`Express Server Listening on PORT: ${PORT}!`);
});