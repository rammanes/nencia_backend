const { Product } = require("../../models/Product");
const editProduct = async (req, res, next) => {
try {
    const { productId } = req.params;
    const update = { $set: req.body };
    const options = { returnOriginal: false };

    const result = await Product.findOneAndUpdate(
      { _id: productId },
      update,
      options
    );
    return res.status(201).json({
        success: true,
        msg: "Product edited successfully",
        result,
      });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
}
module.exports = editProduct