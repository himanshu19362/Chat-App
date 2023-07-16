const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    conversation_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'Conversation'
    } , 
    sender_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    } , 
    message : {
        type : String
    } , 
    visible : {
        type : Boolean , 
        default : true
    }
} , {timestamps : true});

const Message = mongoose.model('Message' , messageSchema);

module.exports = Message;