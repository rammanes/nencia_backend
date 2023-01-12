const { Product } = require("../../models/Product");
const deleteProduct = async (req, res, next) => {
try {
    const { productId } = req.params;

    Product.deleteOne({ _id: productId }, (error, result) => {
        if (error) {
          return res.status(500).send(error);
        }
        return res.status(200).json({
            success: true,
            msg: "Product deleted successfully",
          });
      });
  
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = deleteProduct