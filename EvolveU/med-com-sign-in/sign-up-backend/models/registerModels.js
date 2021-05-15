//Import Mongoose in order to use MongoDB
const mongoose = require('mongoose')


//Using Mongoose to create the database schema
const registerTemplate = new mongoose.Schema(
    {
        //Details to collect from users
        lastName: {type: String, required: true, trim: true, maxLength: 25},
        firstName: {type: String, required: true, trim: true, maxLength: 25},
        userName: {type: String, required: true, unique: true, trim: true, maxLength: 25},

        email: {type: String, required: true, unique: true, trim: true, lowercase: true},
        password: {type: String, required: true},
        //confirmPassword: {type: String, required: true},

        genderM: {type: String, default: 'male'},
        genderF: {type: String, default: 'female'},
        avatar: {type: String, 
                 default: 'http://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'},

        discipline: {type: String, required: true},
        status: {type: String, required: true, default: ''},
        education: {type: String, required: true, default: ''},

        followers: [{type: mongoose.Types.ObjectId, ref: 'Med-Com'}],
        following: [{type: mongoose.Types.ObjectId, ref: 'Med-Com'}],

        date: {type: Date, default: Date.now}

    }
)
{
    timestamps: true
}

//Export DB and Schema
module.exports = mongoose.model('Med-Com', registerTemplate)