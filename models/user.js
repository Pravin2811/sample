const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    Age:{
        type: String,
        required:true
    },
    FavouriteFoods:[
        {
            type:String,
            required:true
        },
        {
            type:String,
            required:true
        },
        {
            type:String
        },
        {
            type:String
        }
    ],
    UID:{
        type:String,
        required:true
    }
})

mongoose.model("User", userSchema)