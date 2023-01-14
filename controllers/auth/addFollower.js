const { User } = require('../../models/User');


const addFollower = async (req, res) => {


    let currentUser = req.user._id
    let { vendorId } = req.params;
    let vendor = await User.findOne({_id: vendorId});
    let foundUser = await User.findOne({_id: currentUser})
    if (!vendor) return res.status(500).json({ success: false, msg: 'No Vendor found' });
    let follower = vendor.followers.filter(data => (data == currentUser))


    if (follower.length == 0) {
            await vendor.updateOne({ $push: { followers: currentUser } });
            await foundUser.updateOne({ $push: { following: vendorId } });

        return res.status(201).json({
            success: true,
            msg: ' Successfully Followed Vendor',
        });

    } else {
        await vendor.updateOne({ $pull: { followers: currentUser } });
        await foundUser.updateOne({ $pull: { following: vendorId } });

        return res.status(201).json({
            success: true,
            msg: 'Successfully Unfollowed Vendor  ',
        });
    }

}

module.exports = addFollower;