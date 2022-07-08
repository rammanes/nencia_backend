const {User} = require('../../models/User');
const bcryptjs = require('bcryptjs');
const {compare} = bcryptjs;
const jwt = require('jsonwebtoken');


const loginUser = async (req, res, next) => {
  try {
    let { userInput, password } = req.body;

    if(!userInput | !password) return res.status(400).json({success: false, msg: 'All fields are required'});

    let findUser = await User.findOne({ 
      $or: [
        { email: userInput }, 
        { phonenumber: userInput }
    ] });

    if (!findUser) return res.status(400).json({success: false, msg: 'User does not exist'});

    if (!findUser.confirmed) return res.status(401).json({success: false, msg: 'Please check your email to confirm your identity'});

    let passwordMatch = await compare(password, findUser.password);

    if(!passwordMatch) return res.status(403).json({success: false, msg: 'Invalid login credential'});

    let token = jwt.sign({findUser}, process.env.JWT_SECRET, {expiresIn: '365d'});
    
    res.status(200).json({
      success: true,
      msg: 'Login successful',
      data: {
        token,
        user: {
          ...findUser._doc,
          password: ''
        }
      }
    });

  }catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

module.exports = loginUser;