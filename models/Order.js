const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let orderSchema = new Schema({

    orderOwner: {
        type: Schema.Types.ObjectId,
        ref: 'user'},
      products: [{
product:{
    type: Schema.Types.ObjectId,
    ref: 'product'
     },
     quantity:Number
}] ,
amount: {
    type: Number,
    required: true,
},
address: {
    type: Object,
    required: true,
},
status:{
    type: String,
    default: "pending"
}

}, { timestamps: true });

module.exports = {
    Order: model('order', orderSchema)
}