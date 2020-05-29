const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const replySchema = new Schema({    
    text:{type:String},
    // author:{type:Schema.Types.ObjectId, ref:"users"},        
    // likes:{type:Schema.Types.ObjectId, ref:"likes"},
    createdAt:{type:Date, default:Date.now}
})

const Replies = mongoose.model('replies', replySchema);
module.exports = Replies;