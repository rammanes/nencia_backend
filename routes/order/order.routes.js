const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/authjwt");
const getPaymentWindow = require("../../controllers/payment/initialize");
const createAddress = require("../../controllers/order/createAddress");
const getUserAddress = require("../../controllers/order/getAddress");
const paystackWebHook = require("../../controllers/payment/webhooks");
const addToCart = require("../../controllers/cart/addToCart");
const getAllCart = require("../../controllers/cart/getcart");

router.route("/create-address").post(verifyToken, createAddress);

router.route("/initialize-payment").post(verifyToken, getPaymentWindow);

router.route("/create-cart").post(verifyToken, addToCart);

router.route("/get-cart").get(verifyToken, getAllCart);

router.route("/webhook").post(paystackWebHook);

router.route("/get-address").get(verifyToken, getUserAddress);

module.exports = router;
