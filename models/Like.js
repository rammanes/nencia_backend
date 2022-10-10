const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let likeSchema = new Schema({
    like: {
        type: String
    }, 
 
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

module.exports = {
    Like: model('like', likeSchema)
}