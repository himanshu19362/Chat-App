const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'Post'
    } , 
    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    } , 
    comment : {
        type : String
    } , 
    likeCount : {
        type : Number , 
        default : 0
    }
} , {timestamps : true});

const Comment = mongoose.model('Comment' , commentSchema);

module.exports = Comment;