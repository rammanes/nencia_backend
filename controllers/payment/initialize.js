const { initializePayment}  = require('../../paystack');

const getPaymentWindow = async(req, res) => {
    try { 
      let {productAmount} = req.body;
      let payment = productAmount * 100
        const user_data = {
            email: 'itiunggrace@gmail.com',
            amount:1000000,
          };
        
          // user_data.metadata = {
          //   user_id: req.user.id,
          // };
          let promise = initializePayment(user_data);

          
promise.then(
  response => {
  let checkout_url = response.data.authorization_url;
    res.redirect(checkout_url);
  },
  error => console.log(`Error: ${error.message}`)
);

} catch (err) {
  return res.status(500).json({msg: err.message});
}
}
module.exports = getPaymentWindow;
 