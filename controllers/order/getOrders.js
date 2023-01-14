const { Order } = require("../../models/Order");

const getAllOrder = async (req, res) => {
  try {
    const allOrder = await Order.find({})
      .populate("orderOwner")
      .populate("products.product")
      .populate("products.vendorId")
      .populate("address")
      


    //   .populate({
    //     path: "comments",

    //     options: { sort: { _id: -1 } },
    //     populate: {
    //       path: "user",
    //     },
    //   });
    if (!allOrder)
      return res.status(500).json({ success: false, msg: "No order found" });

    return res.status(200).json({
      success: true,
      msg: "All orders",
      allOrder,
    });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message });
  }
};

module.exports = getAllOrder;
