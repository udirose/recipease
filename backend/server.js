const express = require('express')


const app = express()

 const path = require("path")
//https://www.youtube.com/watch?v=SQqSMDIzhaE
const mongoose = require ('mongoose')
const dotenv = require('dotenv')
var bodyParser=require("body-parser")
//connects to routes.js
const routesUrls = require('./routes/signupUser')

const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Connected to Database"))
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open', ()=> console.log('You are connected to database'))



const port = 8080
//this is the base so it would be aws.com:8080/app/routesUrls
//middleware
app.use(express.json())

app.use(express.static('public'))


app.use(express.urlencoded({
  extended: true
}))


const router = express.Router()
const user = require('./models/signupmodel')

app.post('/sign_up', async (req,res)=>{
  console.log("reached")
  const newUser = new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  })
  try{
      const addNewUser = await newUser.save()
      //status 201 means u created something
      res.status(201).json(addNewUser)
  } catch (err){
      res.status(400).json({message: err.message})
  }

  return res.redirect('index.html');
})



//end middleware thing

app.use(cors())
app.use('/sign_up',routesUrls)
app.listen(port, () => `Server running on port ${port}`)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use(express.static(__dirname + '/client/public')); //Add this line. Change public to whatever location your static assets are stored at


