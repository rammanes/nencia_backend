const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let userSchema = new Schema({
  fullname: String,
  PushToken: String,
  email: String,
  phonenumber: String,
  password: String,
  businessLogo: String,
  ProfilePicture: String,
  secretToken: String,
  businessName: String,
  businessAddress: String,
  businessDescription: String,

  role: {
    type: String,
    enum: ['Admin', 'Vendor', 'User'],
    default: 'User'
},
accountDetails:{
  bankName: String,
  accountNumber: String,
  accountName: String,
  recipientCode: String
  },

  address: [{
    type: Schema.Types.ObjectId,
    ref: "address"
  }],
 followers: [{
    user: {type: Schema.Types.ObjectId, ref: 'user'},
  }],
  confirmed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports =  {
  User: model('user', userSchema)
}