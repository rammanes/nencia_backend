const { Product } = require("../../models/Product");

const getVendorProduct = async (req, res) => {
  try {
    let { userId } = req.params;
    let products = await Product.find({ author: userId })
      .sort({ _id: -1 })
      .populate("author")
      .populate({
        path: "comments",

        options: { sort: { _id: -1 } },
        populate: {
          path: "user",
        },
      });

    if (!products)
      return res
        .status(500)
        .json({ success: false, msg: "No Product found for this Vendor" });

    return res.status(200).json({
      success: true,
      msg: "All Products",
      products,
    });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message });
  }
};

module.exports = getVendorProduct;
