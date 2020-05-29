const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({    
    text:{type:String},
    // author:{type:Schema.Types.ObjectId, ref:"users"},    
    replies:[{type:Schema.Types.ObjectId, ref:"replies"}],
    // likes:{type:Schema.Types.ObjectId, ref:"likes"},
    createdAt:{type:Date, default:Date.now}
})

const Comments = mongoose.model('comments', commentSchema);
module.exports = Comments;