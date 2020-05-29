const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title:{type:String, required:true},
    body:{type:String, required:true},
    // author:{type:Schema.Types.ObjectId, ref:"users"},
    comments:[{type:Schema.Types.ObjectId, ref:"comments"}],   
    // likes:{type:Schema.Types.ObjectId, ref:"likes"},
    createdAt:{type:Date, default:Date.now}
})

const Article = mongoose.model('articles', articleSchema);
module.exports = Article;