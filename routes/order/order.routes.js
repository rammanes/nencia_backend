const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/authjwt')
const getPaymentWindow = require('../../controllers/payment/initialize')
const createAddress = require('../../controllers/order/createAddress');
const getUserAddress = require('../../controllers/order/getAddress')
// const getAll = require('../../controllers/product/getProducts');
// const createComment = require('../../controllers/product/createComment');
// const postLike = require('../../controllers/product/createLike')


router.route('/create-address/:userId')
    .post(verifyToken, createAddress)

    router.route('/initialize-payment')
    .post(verifyToken, getPaymentWindow)


router.route('/get-address/:userId')
    .get(getUserAddress);

// router.route('/create-comment/:postId')
//     .post(verifyToken,  createComment)

// router.route('/post-like/:postId')
//     .post(verifyToken,  postLike)
module.exports = router;