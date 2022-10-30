const { User } = require('../../models/User');
const bcryptjs = require('bcryptjs');
const welcomeEmail = require('../../utils/welcomeEmail');
const randomstring = require('randomstring');

const createNewUser = async (req, res, next) => {
  try {
    let { fullname, phonenumber, email, password } = req.body;
    if(!fullname || !phonenumber || !email || !password ) return res.status(400).json({success: false, msg: 'All fields are required'});

    let newfullname = fullname.toLowerCase().replace(/ /g, '');


    const user_email = await User.findOne({email});
    if(user_email) return res.status(400).json({success: false, msg: 'Email already exists'});

    const user_phonenumber = await User.findOne({phonenumber});
    if(user_phonenumber) return res.status(400).json({success: false, msg: 'phone number already exists'});

    let hashedPassword = bcryptjs.hashSync(password, 12);

    let secretToken = randomstring.generate({
      length: 6,
      charset: 'numeric'
    });

    const newUser = new User({
      fullname: newfullname,
      email,
      phonenumber,
      password: hashedPassword,
      secretToken
    });

    await newUser.save();
    if(!newUser) return res.status(500).json({msg: 'An error has occurred'});

    await welcomeEmail(req, newUser.fullname, newUser.email, newUser.secretToken);

    res.status(201).json({
      success: true,
      msg: 'User saved successfully',
      user: {
        ...newUser._doc,
        password: ''
      }
    })

  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
}

module.exports = createNewUser;
