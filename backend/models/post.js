const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    } , 
    type : {
        type : String , 
        enum : ['Photo' , 'Video']
    } , 
    url : {
        type : String
    } , 
    visible : {
        type : Boolean , 
        default : true
    }
} , {timestamps : true});

const Post = mongoose.model('Post' , postSchema);

module.exports = Post;