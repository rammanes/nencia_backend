const { User } = require('../../models/User');

const getUser = async(req, res) => {
    try {
        let { userId } = req.params;
        let user = await User.findOne({_id: userId}).populate("followers.user")
        if (!user) return res.status(500).json({ success: false, msg: 'No User found' });
        return res.status(200).json({
          success: true,
          msg: 'User successful',
          user: {
            ...user._doc,
            password: ''
          }
      });
      }catch(err) {
        console.log(err);
      }
}
module.exports = getUser;