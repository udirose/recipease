const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const localStrategy = require("passport-local").Strategy;
const app = express();
const mongoose = require("mongoose");
const User = require("../models/signupmodel");
var isLoggedIn;
var access


router.route("/login").post(async (req, res) => {

  let result = await User.findOne({ email: req.body.usernameField });

  if (result) {

    console.log("username exists");
    bcrypt.compare(
      req.body.passwordField,
      result.password,
      function (err, data) {
        if (data) {
          console.log("LOGGING IN WORKS!");
          isLoggedIn = true;
          access = true
          //res.redirect('/');
          res.send(data);
        } else if (err) {
          isLoggedIn = false
          access = false
          console.log("some error");
        } else {
          isLoggedIn = false
          access = false
          console.log("Invalid login!");
        }
      }
    );
    //res.send(result)
  } else {
    console.log("username not found");
  }
});

router.route("/").post(async (req, res) => {
  console.log(access)
  res.send(access)
})

module.exports = router;
