const { Cart } = require("../../models/Cart");
const cloudinary = require("cloudinary").v2;
const cloudinarySetup = require("../../config/cloudinarySetup");
const addMeasurement = async (req, res, next) => {
try {
  let { measurement, note } = req.body;

    let image = "";

    if (req.file) {
      await cloudinarySetup();
      const uploadedMedia = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
      });
      image = uploadedMedia.secure_url;
    }
    const details = {
        measurement,
        buyerPhoto: image,
        note,
      };
    const { cartId } = req.params;
    const update = { $set: details };
    const options = { returnOriginal: false };

    const result = await Cart.findOneAndUpdate(
      { _id: cartId },
      update,
      options
    );
    return res.status(201).json({
        success: true,
        msg: "measurement added successfully",
        result,
      });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
}
module.exports = addMeasurement