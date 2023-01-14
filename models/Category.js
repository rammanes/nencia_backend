const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categorySchema = new Schema(
  {
    category: String,
  },
  { timestamps: true }
);

module.exports = {
  Category: model("category", categorySchema),
};
