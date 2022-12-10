const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');
const createNewUser = require('../../controllers/auth/register');
const createNewVendor = require('../../controllers/auth/vendorRegister');
const loginUser = require('../../controllers/auth/login');
const confirmUserEmail = require('../../controllers/auth/confirmEmail');
const forgotPassword = require('../../controllers/auth/forgotPassword')
const resetPassword = require('../../controllers/auth/resetPassword')
const addProfilePicture = require('../../controllers/auth/ProfilePicture')
const getUser = require('../../controllers/auth/getUser')



router.post('/register', createNewUser);
router.post('/register-vendor', upload.single('businessLogo'), createNewVendor);


router.post('/login', loginUser);
router.route('/get-user/:userId')
    .get(getUser); 

router.post('/confirm-user', confirmUserEmail);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password/:token', resetPassword);
router.post('/upload-profile-picture/:userId', upload.single('ProfilePicture'), addProfilePicture);

module.exports = router;