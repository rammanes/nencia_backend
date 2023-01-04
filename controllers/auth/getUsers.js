const { User } = require('../../models/User');

const getUsers = async(req, res) => {
    try {
        let allUser = await User.find({})
        if (!allUser) return res.status(500).json({ success: false, msg: 'No User found' });
        return res.status(200).json({
          success: true,
          msg: 'User successful',
          user: {
            allUser
          }
      });
      }catch(err) {
        console.log(err);
      }
}
module.exports = getUsers;