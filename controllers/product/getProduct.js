const { Product } = require("../../models/Product");

const getProduct = async (req, res) => {
  try {
    let { productId } = req.params;
    let product = await Product.findOne({ _id: productId }).populate(
      "likes"
    );
    if (!product)
      return res.status(500).json({ success: false, msg: "No Product Found" });
    return res.status(200).json({
      success: true,
      msg: "successfully found product",
      product,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = getProduct;
