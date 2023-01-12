const express = require("express");
const getCountry = require("../../controllers/logistics/getCountries");
const getState = require("../../controllers/logistics/getStates");
const router = express.Router();
// const verifyToken = require("../../middlewares/authjwt");


router.route("/get-country").get( getCountry);
router.route("/get-state").get( getState);



module.exports = router;

