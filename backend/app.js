const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const passport = require('passport')
const bcrypt = require ('bcrypt')
const flash = require('express-flash')
const session = require('express-session')
const hbs = require('express-handlebars')
const localStrategy = require('passport-local').Strategy
const methodOverride = require('method-override')



//connect to mongoose
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Connected to Database"))


app.use(flash())
app.use(session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: true
}))
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.json())

//require routes and models
app.use("/", require('./routes/signupUser'))
app.use("/", require('./routes/loginUser'))
app.use("/", require('./routes/dishes'))
app.use("/", require('./routes/uploadRecipes'))
// const User = require('./models/signupmodel')

// //passport stuff
// app.use(passport.initialize())
// app.use(passport.session())

// passport.serializeUser(function (user, done){
//   done(null, user.id)
// })

// passport.deserializeUser(function (id,done){
//   User.findById(id, function(err,user){
//     done(err,user)
//   })
// })

// passport.use(new localStrategy(function (username, password, done){
//   User.findOne({username: username}, function(err,user){
//     if(err) {return done(err)}
//     if(!user) {
//       return done(null, false, {message: "No email with this account"})
//     }

//     bcrypt.compare(password, user.password, function (err,res){
//       if(err) return done(err)

//       if(res===false){
//         return done(null, false, {message: 'Incorrect Password'})
//       }
//       console.log("LOGGED IN!!!")
//       return done(null,user)
//     })
//   })
// }))

// app.post('/login', passport.authenticate('local',{
//   successRedirect: 'http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:3000/',
//   failureRedirect: 'http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:3000/login'
// }, console.log("POST LOGIN")))

// app.get('/logout', function (req,res){
//   req.logout()
//   res.redirect('/')
// })








//logout
app.delete('/logout', (req,res)=>{
  req.logOut()
  req.redirect('/login')
})



app.listen(8080, function () {
  console.log("Server is running on 8080")
})

module.exports = app;