const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    title : {
        type : String
    } , 
    type : {
        type : String , 
        enum : ['Group' , 'Direct']
    }
} , {timestamps : true});

const Conversation = mongoose.model('Conversation' , conversationSchema);

module.exports = Conversation;