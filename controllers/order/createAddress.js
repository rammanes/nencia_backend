const { User } = require("../../models/User");
const { Address } = require("../../models/Address");

const createAddress = async (req, res) => {
  try {
    let { fullname, phonenumber, address, city, state, country, zipcode } =
      req.body;
    let userId = req.user._id;

    let foundUser = await User.findOne({ _id: userId });
    let addressOwner = req.user._id;
    const newAddress = new Address({
      user: addressOwner,
      fullname,
      phonenumber,
      address,
      city,
      state,
      country,
      zipcode,
    });
    await newAddress.save();

    foundUser.address.push(newAddress._id);
    await foundUser.save();
    return res.status(201).json({
      success: true,
      msg: "Address created Successfully",
      newAddress,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = createAddress;
