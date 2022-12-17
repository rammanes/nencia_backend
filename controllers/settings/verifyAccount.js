const { verifyBankAccountNumbers}  = require('../../paystack');

const verifyAccount = async(req, res) => {
    try { 
      let {bankCode, accountNumber} = req.body;
        const account = {
            bank: bankCode,
            number: accountNumber,
          };    
          let promise = verifyBankAccountNumbers(account);

          
promise.then(
  response => {
  let account = response.data;
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
module.exports = verifyAccount;
 