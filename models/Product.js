const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let productSchema = new Schema({
    productPrice: String,
    description: String,
    productImage: String,
    productType: {
        type: String,
        enum: ['Dress', 'Fabric'],
        default: 'Dress'
    }, 
    sizes: [String],
    yards: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
      },
      comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment',
     }],
     likes: [String]
}, { timestamps: true });

module.exports = {
    Product: model('product', productSchema)
}