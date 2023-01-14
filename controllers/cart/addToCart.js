const { Cart } = require("../../models/Cart");
const cloudinary = require("cloudinary").v2;
const cloudinarySetup = require("../../config/cloudinarySetup");

const addToCart = async (req, res) => {
  let { products, totalPrice, measurement, note, addressID } = req.body;

  let image = "";

  if (req.file) {
    await cloudinarySetup();
    const uploadedMedia = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });
    image = uploadedMedia.secure_url;
  }

  let user = req.user._id;

  const newCart = new Cart({
    cartOwner: user,
    products,
    totalPrice,
    measurement,
    buyerPhoto: image,
    note,
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
