const crypto = require("crypto");
const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
const { Cart } = require("../../models/Cart")
const { Order } = require("../../models/Order")


const paystackWebHook = async (req, res, next) => {
  const signature = req.headers["x-paystack-signature"];
  const calculatedSignature = crypto
    .createHmac("sha512", paystackSecretKey)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (signature !== calculatedSignature) {
    return res.status(401).send("Unauthorized");
  }
if(req.body.event == "charge.success") {
  console.log(req.body)
let cartID = req.body.data.metadata.cart_id
let user = req.body.data.metadata.user_id
let order = await Cart.findOne( { _id: cartID })
const newOrder = new Order({
  orderOwner: user,
  products: order.products,
  totalPrice: order.totalPrice,
  address: order.address
});
await newOrder.save();
await order.updateOne( { $set: { status: 'paid' } })
}
  res.status(200).json({
    success: true,
  });
};
module.exports = paystackWebHook;
