const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name:String,
    email:String,
    text:String
}, {
    timestamps:true
})

const Messages = mongoose.model('Message', messageSchema);
module.exports = Messages;