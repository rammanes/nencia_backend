const { getNigerianBanks}  = require('../../paystack');

const getBanks = async(req, res) => {
    try { 
 let promise = getNigerianBanks();
        
promise.then(
  response => {
  let banks = response.data;
  return res.status(201).json({
    success: true,
    msg: 'get banks successfully',
    banks
  });
  },
  error => console.log(`Error: ${error.message}`)
);

} catch (err) {
  return res.status(500).json({msg: err.message});
}
}
module.exports = getBanks;
 