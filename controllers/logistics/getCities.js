const { getCities }  = require('../../topship');

const getCity = async(req, res) => {
    try { 
        let {countryCode} = req.body
 let promise = getCities(countryCode);
        
promise.then(
  response => {
  let cities = response.data;
  return res.status(201).json({
    success: true,
    msg: 'get cities successfully',
    cities
  });
  },
  error => console.log(`Error: ${error.message}`)
);

} catch (err) {
  return res.status(500).json({msg: err.message});
}
}
module.exports = getCity;
 