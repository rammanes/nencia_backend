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
        quantity: Number,
        price: Number,
      },
    ],
    totalPrice: Number,
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
