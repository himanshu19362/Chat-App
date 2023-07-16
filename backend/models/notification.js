const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    } , 
    message : {
        type : String
    } , 
    isRead : {
        type : Boolean , 
        default : false
    }
} , {timestamps : true});

const Notification = mongoose.model('Notification' , notificationSchema);

module.exports = Notification;