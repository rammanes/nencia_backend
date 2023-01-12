const { Address } = require("../../models/Address");


const editAddress = async (req, res, next) => {
try {
    const { addressId } = req.params;
    const update = { $set: req.body };
    const options = { returnOriginal: false };

    const result = await Address.findOneAndUpdate(
      { _id: addressId },
      update,
      options
    );
    return res.status(201).json({
        success: true,
        msg: "Address edited successfully",
        result,
      });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
}
module.exports = editAddress