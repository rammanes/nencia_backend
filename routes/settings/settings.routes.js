const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/authjwt')
const getBanks = require('../../controllers/settings/getBanks')
const verifyAccount = require('../../controllers/settings/verifyAccount')
const addBankDetails = require('../../controllers/settings/addBankDetails')





    router.route('/get-banks')
    .get(getBanks);

    router.route('/verify-account')
    .get(verifyAccount)

    router.route('/add-bank-details')
    .post(addBankDetails)

// router.route('/create-comment/:postId')
//     .post(verifyToken,  createComment)

// router.route('/post-like/:postId')
//     .post(verifyToken,  postLike)
module.exports = router;