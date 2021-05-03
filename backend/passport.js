// const express = require('express')
// const app = express()
const LocalStrategy = require('passport-local').Strategy

const bcrypt = require('bcrypt')
const passport = require("passport")

app.use(passport.initialize())
app.use(passport.session())


function initialize(passport, getUserByEmail, getUserById){
  console.log("PASSPORT")
  const authenticateUser = async (email, password, done) =>{
    console.log(email)
    console.log(password)
    const user = getUserByEmail(email)
    if(user == null){
      return done(null, false, {message: 'No user with that email'})
    }

    try{
      if(await bcrypt.compare(password, user.password)){
        console.log("WORKED")
        return done(null, user)
      } else {
        console.log("INVALID PASSWORD")
        return done(null, false, { message: 'Password incorrect'})
      }
    } catch(e) {
      return done(e)
    }


  }


  passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'}, authenticateUser))
  passport.serializeUser((user, done)=> done(null, user.id))
  passport.deserializeUser((id,done)=> {
    return done(null, getUserById(id))
  })
}

module.exports = initialize