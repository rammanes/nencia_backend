const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/authjwt");
const getBanks = require("../../controllers/settings/getBanks");
const verifyAccount = require("../../controllers/settings/verifyAccount");
const addBankDetails = require("../../controllers/settings/addBankDetails");
const userSettings = require("../../controllers/settings/updateProfile");
const upload = require("../../config/multerSetup");
const addSizeChart = require("../../controllers/settings/addSizeChart");

router.route("/get-banks").get(getBanks);

router.route("/verify-account").get(verifyAccount);

router.route("/add-bank-details/:vendorId").post(addBankDetails);

router.route("/profile-settings/:vendorId").post(userSettings);

router.post(
  "/upload-size-chart/:userId",
  upload.single("sizeChart"),
  addSizeChart
);

module.exports = router;
