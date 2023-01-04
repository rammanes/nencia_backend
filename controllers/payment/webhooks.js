const crypto = require('crypto');
const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;


// @desc  webhook to paystack
// @route POST /plan/authentication
const paystackWebHook = async (req, res, next) =>{
      // Validate the webhook event
      const signature = req.headers['x-paystack-signature'];
      const calculatedSignature = crypto
        .createHmac('sha512', paystackSecretKey)
        .update(JSON.stringify(req.body))
        .digest('hex');
      if (signature !== calculatedSignature) {
        // The webhook event is not legitimate, so return an error
        return res.status(401).send('Unauthorized');
      }
    
      // Process the webhook event
      switch (req.body.event) {
        case 'charge.success':
          console.log(req.body)
          // A payment was successful, so update your database or take other actions
          break;
        case 'charge.failed':
          console.log(req.body)
          // A payment failed, so update your database or take other actions
          break;
        // Handle other events as needed
      }
    
      res.send('OK');
    
}
module.exports = paystackWebHook 
