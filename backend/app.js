const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require("body-parser")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())



//connect to mongoose
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Connected to Database"))


//require routes
app.use("/", require('./routes/signupUser'))
app.use("/", require('./routes/loginUser'))
app.use("/", require('./routes/dishes'))


app.listen(8080, function () {
  console.log("Server is running on 8080")
})

module.exports = app;