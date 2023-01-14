const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let cartSchema = new Schema(
  {
    cartOwner: {
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
        size: String,
        price: Number,
      },
    ],
    totalPrice: Number,
    measurement: [],
    buyerPhoto: String,
    note: String,
    address: {
      type: Schema.Types.ObjectId,
      ref: "address",
    },
    status: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = {
  Cart: model("cart", cartSchema),
};
