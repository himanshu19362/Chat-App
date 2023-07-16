const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : {
        type : String
    } , 
    name : {
        type : String
    } , 
    email : {
        type : String
    } , 
    password : {
        type : String
    } , 
    gender : {
        type : String , 
        enum : ['Male' , 'Female' , 'Other']
    } , 
    avatar : {
        type : String
    } , 
    visible : {
        type : Boolean , 
        default : true
    } , 
    bio : {
        type : String
    } , 
    verified : {
        type : Boolean , 
        default : false
    }
} , {timestamps : true});


userSchema.index(
    { createdAt: 1 },
    { expireAfterSeconds: 125, partialFilterExpression: { verified: false } }
);

const User = mongoose.model('User' , userSchema);

module.exports = User;