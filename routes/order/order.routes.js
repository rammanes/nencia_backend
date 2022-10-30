const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/authjwt')


const createAddress = require('../../controllers/order/createAddress');
// const getAll = require('../../controllers/product/getProducts');
// const createComment = require('../../controllers/product/createComment');
// const postLike = require('../../controllers/product/createLike')


router.route('/create-address/:userId')
    .post(verifyToken, createAddress)

// router.route('/get-products')
//     .get(getAll);

// router.route('/create-comment/:postId')
//     .post(verifyToken,  createComment)

// router.route('/post-like/:postId')
//     .post(verifyToken,  postLike)
module.exports = router;