const { createUserRecipientCode}  = require('../../paystack');
const {User} = require('../../models/User')
const addBankDetail = async(req, res) => {
    try { 
      let { name, bankCode, accountNumber} = req.body;
      let type = "nuban"
        const account = {
            type: type,
            name: name,
            bank_code: bankCode,
            account_number: accountNumber,
          };    
          let promise = createUserRecipientCode(account);

          
promise.then(
  response => {
  let account = response.data.data.recipient_code;
  let { vendorId } = req.params;
  let vendor = User.findOne({_id: vendorId});
  if (!vendor) return res.status(500).json({ success: false, msg: 'No Vendor found' });
  return res.status(201).json({
    success: true,
    msg: 'account verified successfully',
    account
  });
  },
  error => console.log(`Error: ${error.message}`)
);

} catch (err) {
  return res.status(500).json({msg: err.message});
}
}
module.exports = addBankDetail;
 