const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'Post'
    } , 
    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    }
} , {timestamps : true});

const Like = mongoose.model('Like' , likeSchema);

module.exports = Like;