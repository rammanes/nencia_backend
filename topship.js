const axios = require('axios')
// get countries
exports.getCountries = async () => {
    const options = {
      url: "https://topship-staging.africa/api/get-countries",
      headers: {
        authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
      },
      method: "GET",
    };
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios.request(options);
        resolve(data);
        
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

//   get-states

  exports.getStates = async (countryCode) => {
    const options = {
      url: `https://topship-staging.africa/api/get-states?countryCode=${countryCode}`,
      headers: {
        authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
      },
      method: "GET",
    };
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios.request(options);
        resolve(data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  //   get-cities

  exports.getCities = async (countryCode) => {
    const options = {
      url: `https://topship-staging.africa/api/get-states?countryCode=${countryCode}`,
      headers: {
        authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
      },
      method: "GET",
    };
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios.request(options);
        resolve(data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

    //   get-shipment-rate

    exports.getShipmentRate = async (shipmentDetails) => {
        const options = {
          url: `https://topship-staging.africa/api/get-shipment-rate?shipmentDetail=${shipmentDetails}`,
          headers: {
            authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
          },
          method: "GET",
        };
        return new Promise(async (resolve, reject) => {
          try {
            const data = await axios.request(options);
            resolve(data);
          } catch (error) {
            console.log(error);
            reject(error);
          }
        });
      };

//   book shipment

exports.bookShipment = async (form) => {
  const options = {
    url: "https://topship-staging.africa/api/save-shipment",
    headers: {
      authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    data: form,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request(options);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

// pay-for-shipment

exports.shipmentPayment = async (form) => {
    const options = {
      url: "https://topship-staging.africa/api/pay-from-wallet",
      headers: {
        authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      data: form,
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.request(options);
        resolve(response.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

//   track shipment

exports.trackShipment = async (trackingId) => {
    const options = {
      url: `https://topship-staging.africa/api/track-shipment?trackingId=${trackingId}`,
      headers: {
        authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
      },
      method: "GET",
    };
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios.request(options);
        resolve(data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

//   cancel shipment
exports.cancelShipment = async (form) => {
    const options = {
      url: "https://topship-staging.africa/api/cancel-shipment",
      headers: {
        authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      data: form,
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.request(options);
        resolve(response.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

//   get shipment by ID

exports.getShipment = async (shipmentId) => {
    const options = {
      url: `https://topship-staging.africa/api/get-shipment/${shipmentId}`,
      headers: {
        authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
      },
      method: "GET",
    };
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios.request(options);
        resolve(data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };


  //   get shipments

exports.getShipment = async (details) => {
    const options = {
      url: `https://topship-staging.africa/api/get-shipments?filter=${details}`,
      headers: {
        authorization: `Bearer ${process.env.TOPSHIP_STAGING_KEY}`,
      },
      method: "GET",
    };
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios.request(options);
        resolve(data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };