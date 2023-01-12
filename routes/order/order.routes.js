const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/authjwt");
const getPaymentWindow = require("../../controllers/payment/initialize");
const createAddress = require("../../controllers/order/createAddress");
const getUserAddress = require("../../controllers/order/getAddress");
const paystackWebHook = require("../../controllers/payment/webhooks");
const addToCart = require("../../controllers/cart/addToCart");
const getAllCart = require("../../controllers/cart/getCart");
const getAllOrder = require("../../controllers/order/getOrders");
const getVendorOrders = require("../../controllers/order/getVendorOrder");
const editAddress = require("../../controllers/order/editAddress");
const deleteAddress = require("../../controllers/order/deleteAddress");

router.route("/create-address").post(verifyToken, createAddress);

router.route("/initialize-payment").post(verifyToken, getPaymentWindow);

router.route("/create-cart").post(verifyToken, addToCart);

router.route("/get-carts").get(verifyToken, getAllCart);

router.route("/get-orders").get(verifyToken, getAllOrder);

router.route("/vendor-orders/:vendorID").get(verifyToken, getVendorOrders);

router.route("/webhook").post(paystackWebHook);

router.route("/get-address").get(verifyToken, getUserAddress);

router.route("/edit-address/:addressId").patch(verifyToken, editAddress);

router.route("/delete-address/:addressId").delete(verifyToken, deleteAddress);



module.exports = router;

