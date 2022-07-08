const {User} = require('../../models/User');
const bcryptjs = require('bcryptjs');


const resetPassword = async (req, res, next) => {
    let { newPassword, confirmNewPassword } = req.body;
    if(newPassword.length < 6 ) return res.status(400).json({success: false, msg: 'Password must be six characters or more'});

    if (newPassword !== confirmNewPassword) return res.status(400).json({ msg: 'Passwords do not match' })
    let newHashedPassword = bcryptjs.hashSync(newPassword, 12);
    
    let {token} = req.params;
    let user = await User.findOne({ secretToken: token });
  
    if (!user) return res.status(400).json({msg: 'User not found'});
    user.password = newHashedPassword;
    
    await user.save();

    res.status(200).json({
        success: true,
        msg: 'Password reset successfully',
        })
  }
  
  module.exports = resetPassword;
