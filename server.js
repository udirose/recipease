const express = require('express')
const cors = require('cors')

const app = express()

const path = require("path")
//https://www.youtube.com/watch?v=SQqSMDIzhaE
const mongoose = require ('mongoose')
const dotenv = require('dotenv')
//connects to routes.js
const routesUrls = require('./backend/routes/routes')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Connected to Database"))

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers)
});

const port = 8080
//this is the base so it would be aws.com:8080/app/routesUrls
app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(port, () => `Server running on port ${port}`)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use(express.static(__dirname + '/client/public')); //Add this line. Change public to whatever location your static assets are stored at


