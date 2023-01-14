const { getCountries }  = require('../../topship');

const getCountry = async(req, res) => {
    try { 
 let promise = getCountries();
        
promise.then(
  response => {
  let countries = response.data;
  return res.status(201).json({
    success: true,
    msg: 'get countries successfully',
    countries
  });
  },
  error => console.log(`Error: ${error.message}`)
);

} catch (err) {
  return res.status(500).json({msg: err.message});
}
}
module.exports = getCountry;
 