const express = require("express");
const router = express.Router();
const upload = require("../../config/multerSetup");
const verifyToken = require("../../middlewares/authjwt");
const createProduct = require("../../controllers/product/createProduct");
const getAll = require("../../controllers/product/getProducts");
const getVendorProduct = require("../../controllers/product/getVendorProducts");
const createComment = require("../../controllers/product/createComment");
const postLike = require("../../controllers/product/createLike");
const createCategory = require("../../controllers/product/createCategory");
const getAllCategories = require("../../controllers/product/getCategory");
const getProduct = require("../../controllers/product/getProduct");
const editProduct = require("../../controllers/product/editProduct");
const deleteProduct = require("../../controllers/product/deleteProduct");

router
  .route("/create-product")
  .post(verifyToken, upload.single("postMedia"), createProduct);

router.route("/get-category").get(getAllCategories);

router.route("/create-category").post(createCategory);

router.route("/get-products").get(getAll);

router.route("/get-product/:productId").get(getProduct);

router.route("/get-vendor-products/:userId").get(getVendorProduct);

router.route("/create-comment/:postId").post(verifyToken, createComment);

router.route("/edit-product/:productId").patch(verifyToken, editProduct);

router.route("/delete-product/:productId").delete(verifyToken, deleteProduct);



router.route("/post-like/:postId").post(verifyToken, postLike);
module.exports = router;
