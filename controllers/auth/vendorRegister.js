const { User } = require("../../models/User");
const bcryptjs = require("bcryptjs");
const welcomeEmail = require("../../utils/welcomeEmail");
const randomstring = require("randomstring");
const cloudinary = require("cloudinary").v2;
const cloudinarySetup = require("../../config/cloudinarySetup");

const createNewVendor = async (req, res, next) => {
  try {
    let {
      fullname,
      phonenumber,
      email,
      password,
      businessName,
      businessAddress,
      businessDescription,
    } = req.body;
    if (!fullname || !phonenumber || !email || !password)
      return res
        .status(400)
        .json({ success: false, msg: "All fields are required" });

    const user_email = await User.findOne({ email });
    if (user_email)
      return res
        .status(400)
        .json({ success: false, msg: "Email already exists" });

    const user_phonenumber = await User.findOne({ phonenumber });
    if (user_phonenumber)
      return res
        .status(400)
        .json({ success: false, msg: "phone number already exists" });

    let image = "";

    if (req.file) {
      await cloudinarySetup();

      const uploadedMedia = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
      });
      image = uploadedMedia.secure_url;
    }

    let hashedPassword = bcryptjs.hashSync(password, 12);

    let secretToken = randomstring.generate({
      length: 6,
      charset: "numeric",
    });
    let newRole = "Vendor";
    const newUser = new User({
      fullname,
      email,
      phonenumber,
      businessName,
      businessAddress,
      businessDescription,
      businessLogo: image,
      role: newRole,
      password: hashedPassword,
      secretToken,
    });

    await newUser.save();
    if (!newUser) return res.status(500).json({ msg: "An error has occurred" });

    await welcomeEmail(
      req,
      newUser.fullname,
      newUser.email,
      newUser.secretToken
    );

    res.status(201).json({
      success: true,
      msg: "User saved successfully",
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = createNewVendor;
