const express = require('express')
const router = express.Router()
const loggedUser = require('../models/signupmodel')

router.route('/login').get((req,res)=>{
    const logEmail = req.body.email
    const logPass = req.body.password
    console.log(req.body.email)

    // if(logEmail != null && logEmail == document.getElementById('nameVal')){
    //     //redirect to home, and have them be logged in
    // }

    // const logUser = new loggedUser({
    //     "name": nuName,
    //     "email": nuEmail,
    //     "password": nuPass
    // })


    //newUser.save()
})

module.exports = router