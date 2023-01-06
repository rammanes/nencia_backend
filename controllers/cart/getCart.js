const { Cart } = require("../../models/Cart");

const getAllCart = async (req, res) => {
  try {
    const allCarts = await Cart.find({})
      .populate("cartOwner")
      .populate("products.product")
      .populate("address")
    //   .populate({
    //     path: "comments",

    //     options: { sort: { _id: -1 } },
    //     populate: {
    //       path: "user",
    //     },
    //   });
    if (!allCarts)
      return res.status(500).json({ success: false, msg: "No cart found" });

    return res.status(200).json({
      success: true,
      msg: "All Carts",
      allCarts,
    });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message });
  }
};

module.exports = getAllCart;
