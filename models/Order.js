const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let orderSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      products: [
        {
        type: Schema.Types.ObjectId,
        ref: 'comment',
     },
    ] ,

}, { timestamps: true });

module.exports = {
    Product: model('order', orderSchema)
}