const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/authjwt')
const getPaymentWindow = require('../../controllers/payment/initialize')
const getPaymentWindow = require('../../controllers/payment/initialize')

const createAddress = require('../../controllers/order/createAddress');
const getUserAddress = require('../../controllers/order/getAddress');
const paystackWebHook = require('../../controllers/payment/webhooks');



router.route('/create-address/:userId')
    .post(verifyToken, createAddress)

    router.route('/initialize-payment')
    .post(verifyToken, getPaymentWindow)

    router.route('/webhook')
    .post(paystackWebHook)

router.route('/get-address/:userId')
    .get(getUserAddress);


module.exports = router;