const { User } = require("../../models/User");

const userSettings = async (req, res, next) => {
  try {
    let { vendorId } = req.params;
    let vendor = await User.findOneAndUpdate({ _id: vendorId }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      msg: "User updated successfully",
      vendor,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = userSettings;
