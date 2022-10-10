const { Product } = require('../../models/Product');
const cloudinary = require('cloudinary').v2;
const cloudinarySetup = require('../../config/cloudinarySetup');


const createNewProduct = async(req, res) => {
    let {       
        productPrice,
        description,
        productType,
        sizes,
        yards
    } = req.body;

    // if (!productName) return res.status(400).json({ msg: 'Please upload product' });

    let image = '';

    if (req.file) {
        await cloudinarySetup();

        const uploadedMedia = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto" });
        image = uploadedMedia.secure_url;
    }
    let user = req.user._id

    const newProduct = new Product({
        
        productPrice,
        description,
        productType,
        sizes,
        yards,
        productImage: image,
        author: user
    });

    if (!newProduct) return res.status(500).json({ success: false, msg: 'An error has occurred' })

    await newProduct.save();

    return res.status(201).json({
        success: true,
        msg: 'Product created',
        newProduct
    });
}

module.exports = createNewProduct;