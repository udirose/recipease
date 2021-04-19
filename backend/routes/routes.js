const express = require('express')
const router = express.Router()
const signUpSchema = require('../Database')

//put the path here
router.post('../Database', (request,response)=>{
    const signedUpUser = new signUpSchema({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router