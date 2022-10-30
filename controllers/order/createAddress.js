const { User } = require('../../models/User');
const { Address } = require('../../models/Address');

const createAddress = async(req, res) => {
    try {
        let { fullname, phonenumber, address, city, state, country, zipcode } = req.body
        let { userId } = req.params;
        let user = await User.findOne({_id: userId});
        const newAddress = new Address({
            fullname,
             phonenumber, 
             address,
              city,
               state,
                country, 
                zipcode
        });
        await newAddress.save(); 
        user.address.push(newAddress._id);
        await user.save();
        return res.status(201).json({
          success: true,
          msg: 'Address created Successfully',
          newAddress
      });
      }catch(err) {
        console.log(err);
      }
}
module.exports = createAddress;