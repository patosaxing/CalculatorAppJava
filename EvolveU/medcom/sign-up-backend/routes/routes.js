//Import Express
const express = require('express')
const router = express.Router()

//Import bcrypt
const bcrypt = require('bcrypt')

//Import Register Model page
const signUp = require('../models/registerModels')
const authControl = require('../controllers/authControl')


//Post function for sign-up form
router.post('/register', authControl.register)


router.post('/login', authControl.login)


router.post('/logout', authControl.logout)


router.post('/refresh_token', authControl.generateAccessToken)

module.exports = router