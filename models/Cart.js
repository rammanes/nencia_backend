const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let cartSchema = new Schema({
    
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      products: [{
productId:{
        type: String,
     },
     quantity:{
        type: Number,
        default: 1
     }
}] ,

}, { timestamps: true });

module.exports = {
    Cart: model('cart', cartSchema)
}