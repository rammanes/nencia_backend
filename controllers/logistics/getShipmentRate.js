const { getShipmentRate }  = require('../../topship');

const getShipmentRates = async(req, res) => {
    try { 
        let {shipmentDetails} = req.body
 let promise = getShipmentRate(shipmentDetails);
        
promise.then(
  response => {
  let states = response.data;
  return res.status(201).json({
    success: true,
    msg: 'get states successfully',
    states
  });
  },
  error => console.log(`Error: ${error.message}`)
);

} catch (err) {
  return res.status(500).json({msg: err.message});
}
}
module.exports = getShipmentRates;
 