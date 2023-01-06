const crypto = require("crypto");
const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

const paystackWebHook = async (req, res, next) => {
  const signature = req.headers["x-paystack-signature"];
  const calculatedSignature = crypto
    .createHmac("sha512", paystackSecretKey)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (signature !== calculatedSignature) {
    return res.status(401).send("Unauthorized");
  }
console.log(req.body)
if(req.body.event == "charge.success") {
console.log(req.body)
} else if(req.body.event == "charge.failed"){
  console.log(req.body)
}else{
  console.log(req.body)
}
  // switch (req.body.event) {
  //   case "charge.success":
  //     console.log(req.body.event);
     
  //     break;
  //   case "charge.failed":
  //     console.log(req.body.event);
      
  //     break;
    
  // }

console.log("OK");
};
module.exports = paystackWebHook;
