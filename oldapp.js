const port = 8080
var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var cors = require('cors')
const mongoose = require ('mongoose')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const user = require('./models/signupmodel')
//const router = express.Router()
//const bodyParser = require("body-parser")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const routesUrls = require('./routes/signupUser')

var app = express();


dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Connected to Database"))
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open', ()=> console.log('You are connected to database'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
// app.use(cookieParser());
app.use(cors)
app.use('/',express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/sign_up',routesUrls)
//app.use("/", router)

//
// app.post('/sign_up', (req,res)=>{
//     console.log("the request worked")
// })

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

// router.post('/sign_up',(request,response) => {
  
//   console.log(request.body);
// })


app.listen(port, () => `Server running on port ${port}`)


module.exports = app;


