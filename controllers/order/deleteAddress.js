const { Address } = require("../../models/Address");
const { User } = require("../../models/User");
const deleteAddress = async (req, res, next) => {
try {
    const { addressId } = req.params;
    const user = req.user._id
 
    let foundUser = await User.findOne({ _id : req.user._id });
    if (!foundUser)
    return res.status(500).json({ success: false, msg: "No user found" });

    Address.deleteOne({ _id: addressId }, async (error, result) => {
        if (error) {
          return res.status(500).send(error);
        }
        foundUser.address.pop(addressId)
        await foundUser.save();
        return res.status(200).json({
            success: true,
            msg: "Address deleted successfully",
          });
      });
  
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = deleteAddress