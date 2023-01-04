const { Address } = require('../../models/Address');

const getUserAddress = async(req, res) => {
    try {
        let  userId  = req.user._id;
        let address = await Address.find({user: userId}).sort({_id: -1});
       
        if (!address) return res.status(500).json({ success: false, msg: 'No Address found for this user' });

        return res.status(200).json({
            success: true,
            msg: 'All Address',
            address

        })

    } catch (err) {
        return res.status(500).json({ success: false, msg: err.message });
    }
}

module.exports = getUserAddress;