const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let orderSchema = new Schema(
  {
    orderOwner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "product",
        },
        vendorId: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        quantity: Number,
        price: Number,
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "address",
    },
    status: {
      type: String,
      enum: [ "processing", "delivery", "completed"],
      default: "processing",
    },
  },
  { timestamps: true }
);

module.exports = {
  Order: model("order", orderSchema),
};
