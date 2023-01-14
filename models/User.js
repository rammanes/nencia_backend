const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let userSchema = new Schema(
  {
    fullname: String,
    PushToken: String,
    email: String,
    phonenumber: String,
    password: String,
    businessLogo: String,
    ProfilePicture: {
      type: String, 
      default: null
  },
    secretToken: String,
    businessName: String,
    businessAddress: {
      latitude: String,
      longitude:String,
      longName: String,
      shortName: String
    },
    businessDescription: String,
    CAC_Reg_No: String,

    role: {
      type: String,
      enum: ["Admin", "Vendor", "User"],
      default: "User",
    },
    accountDetails: {
      bankName: String,
      accountNumber: String,
      accountName: String,
      recipientCode: String,
    },
    refundPolicy: String,
    dressAdjustmentPolicy: String,
    sizeChart: {
      type: String, 
      default: null
  },
    address: [
      {
        type: Schema.Types.ObjectId,
        ref: "address",
      },
    ],
    followers: [
      {
       type: Schema.Types.ObjectId, ref: "user" 
      },
    ],
    following: [
      {
       type: Schema.Types.ObjectId, ref: "user" 
      },
    ],
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = {
  User: model("user", userSchema),
};
