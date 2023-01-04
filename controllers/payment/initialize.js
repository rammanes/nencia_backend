const { initializePayment } = require("../../paystack");

const getPaymentWindow = async (req, res) => {
  try {
    let { productAmount, cartID } = req.body;
    let payment = productAmount * 100;
    const user_data = {
      email: req.user.email,
      amount: payment,
    };
    user_data.metadata = {
      user_id: req.user.id,
      cart_id: cartID,
    };
    let promise = initializePayment(user_data);

    promise.then(
      (response) => {
        let checkout_url = response.data.authorization_url;
        return res.status(201).json({
          success: true,
          msg: "payment initialize successfully",
          checkout_url,
        });
      },
      (error) => console.log(`Error: ${error.message}`)
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = getPaymentWindow;
