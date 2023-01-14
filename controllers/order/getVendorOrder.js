const { Order } = require("../../models/Order");

const getVendorOrders = async (req, res) => {
    try {
        let { vendorID } = req.params;
        let order = await Order.find({ products: { $elemMatch: { vendorId: vendorID } } })
        if (!order)
          return res.status(500).json({ success: false, msg: "No Order Found" });
        return res.status(200).json({
          success: true,
          msg: "successfully found order",
          order,
        });
      } catch (err) {
        console.log(err);
      }
};

module.exports = getVendorOrders;
