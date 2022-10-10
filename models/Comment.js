const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let commentSchema = new Schema({
    comment: {
        type: String
    }, 
 
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

module.exports = {
    Comment: model('comment', commentSchema)
}