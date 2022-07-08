const express = require('express');
const router = express.Router();
const createNewUser = require('../../controllers/auth/register');
const loginUser = require('../../controllers/auth/login');
const confirmUserEmail = require('../../controllers/auth/confirmEmail');
const forgotPassword = require('../../controllers/auth/forgotPassword')
const resetPassword = require('../../controllers/auth/resetPassword')




router.post('/register', createNewUser);

router.post('/login', loginUser);

router.post('/confirm-user', confirmUserEmail);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password/:token', resetPassword);

module.exports = router;