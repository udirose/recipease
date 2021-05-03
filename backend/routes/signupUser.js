const express = require('express')
const router = express.Router()
const bcrypt = require ('bcrypt')
const registerUser = require('../models/signupmodel')


router.route('/register').post( async(req,res)=>{
    const nuName = req.body.name
    const nuEmail = req.body.email
    //const nuPass = req.body.password

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new registerUser({
            "name": nuName,
            "email": nuEmail,
            "password": hashedPassword
        })
        res.redirect('/login')
        newUser.save()
    } catch {
        res.redirect('/register')
    }

    
})

module.exports = router



// //getting all users
// router.get('/',async(req,res)=>{
//     try{
//         const users = await user.find()
//         res.json(users)
//     } catch(err){
//         res.status(500).json({message: err.message})
//     }
// })
// //getting one
// router.get('/:id',getUser,(req,res)=>{
//     res.json(res.newUser)
// })
// //creating one
// router.post('/', async (req,res)=>{
//     console.log("reached!")
//     const newUser = new user({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     })
//     try{
//         const addNewUser = await newUser.save()
//         //status 201 means u created something
//         return res.status(201).json(addNewUser)
//     } catch (err){
//         return res.status(400).json({message: err.message})
//     }
// })

// //updating one
// router.patch('/:id',getUser, async (req,res)=>{
//     if(req.body.name != null){
//         res.newUser.name = req.body.name
//     }
//     if(req.body.email != null){
//         res.newUser.email = req.body.email
//     }
//     if(req.body.password != null){
//         res.newUser.password = req.body.password
//     }
//     try {
//         const updatedUser = await res.newUser.save()
//         res.json(updatedUser)
//     } catch (err){
//         res.status(400).json({message: err.message})
//     }
// })

// //deleting one
// router.delete('/:id',getUser,async (req,res)=>{
//     try{
//         await res.newUser.remove()
//         res.json({message: 'Account deleted'})
//     } catch (err){
//         res.status(500).json({message: err.message})
//     }
// })

// //middleware
// async function getUser(req, res, next){
//     let newUser
//     try{
//         newUser = await user.findById(req.params.id)
//         if(newUser == null){
//             return res.status(404).json({message: 'No user found'})
//         }
//     } catch (err){
//         return res.status(500).json({message: err.message})
//     }

//     res.newUser = newUser
//     next()
// }

