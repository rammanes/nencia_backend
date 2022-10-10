const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');
const verifyToken = require('../../middlewares/authjwt')


const createProduct = require('../../controllers/product/createProduct');
const getAll = require('../../controllers/product/getProducts');
const createComment = require('../../controllers/product/createComment');
const postLike = require('../../controllers/product/createLike')


router.route('/create-product')
    .post(verifyToken, upload.single('postMedia'), createProduct)

router.route('/get-products')
    .get(getAll);

router.route('/create-comment/:postId')
    .post(verifyToken,  createComment)

router.route('/post-like/:postId')
    .post(verifyToken,  postLike)
module.exports = router;