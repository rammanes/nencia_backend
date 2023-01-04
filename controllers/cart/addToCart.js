const { Cart } = require("../../models/Cart");

const addToCart = async (req, res) => {
  let { products, totalPrice, addressID } = req.body;

  let user = req.user._id;

  const newCart = new Cart({
    cartOwner: user,
    products,
    totalPrice,
    address: addressID,
  });
  if (!newCart)
    return res
      .status(500)
      .json({ success: false, msg: "An error has occurred" });

  await newCart.save();

  return res.status(201).json({
    success: true,
    msg: "cart created",
    newCart,
  });
};

module.exports = addToCart;
