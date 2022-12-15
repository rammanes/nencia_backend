const { User } = require('../../models/User');


const addFollower = async (req, res) => {


    let user = req.user._id
    let { vendorId } = req.params;
    let vendor = await User.findOne({_id: vendorId});
    if (!vendor) return res.status(500).json({ success: false, msg: 'No Vendor found' });
    let follower = vendor.followers.filter(data => (data.user == user))


    if (follower.length == 0) {
        await vendor.updateOne({ $push: { followers: {user: user} } });
        return res.status(201).json({
            success: true,
            msg: ' Successfully Followed Vendor',
        });

    } else {
        await vendor.updateOne({ $pull: { followers: {user: user} } });
        return res.status(201).json({
            success: true,
            msg: 'Successfully Unfollowed Vendor  ',
        });
    }

}

module.exports = addFollower;