const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');


const createProduct = require('../../controllers/product/createProduct');
const getAll = require('../../controllers/product/getProducts');


router.route('/create-product')
    .post(upload.single('postMedia'), createProduct)

router.route('/get-products')
    .get(getAll);


module.exports = router;