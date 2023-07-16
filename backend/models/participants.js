const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    conversation_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'Conversation'
    } , 
    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    }
} , {timestamps : true});

const Participant = mongoose.model('Participant' , participantSchema);

module.exports = Participant;