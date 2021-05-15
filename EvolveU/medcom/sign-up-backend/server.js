//Import Express
const express = require('express')
const app = express()

require('dotenv').config()

//Import bcrypt, set the port, dotenv, and import mongoose...
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const port = 27017
const mongoose = require('mongoose')

//Import routes.js file
const routesUrls = require('./routes/routes')

mongoose.connect('mongodb://localhost:27017/Med-Com', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('DB Connected!'))
.catch(err => console.error(err))
    

//mongoose.connection
    //.once('open', () => console.log('Connected'))
    //.on('error', () => 
    //{
       // console.log('Connection error', error)
   // })

 
//Middleware   
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api', routesUrls)






//Listening on port 27017 cause React runs by default on port 3000
app.listen(port, () => console.log("server is up and running")) 