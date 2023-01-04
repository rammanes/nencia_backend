const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let addressSchema = new Schema(
  {
    fullname: String,
    phonenumber: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zipcode: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = {
  Address: model("address", addressSchema),
};
