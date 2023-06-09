var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

const db = require("./database/models")

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let productRouter = require('./routes/product');

var app = express();

// Ejecuto session
app.use(session({secret: "Kiwi Electronics", resave: false, saveUninitialized: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Configuracion de locals
app.use((req, res, next)=>{
  if(req.session.usuario != undefined) {
    res.locals.usuario = req.session.usuario
    return next()
  }
  return next()
})

//Configuracion de cookies
app.use(function(req,res,next){
  if (req.cookies.userId != undefined && req.session.usuario == undefined) {
    let idUsuarioEnCookie = req.cookies.userId;
    db.Usuario.findByPk(idUsuarioEnCookie)
    .then((usuario) =>{
      req.session.usuario = usuario.dataValues;
      res.locals.usuario = usuario.dataValues

      return next();
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    return next()
  }
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
