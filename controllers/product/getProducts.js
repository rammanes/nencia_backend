const { Product } = require('../../models/Product');

const getAllProducts = async(req, res) => {
    try {
        const allProducts = await Product.find({})
        .populate("author")
        .populate({
           path: 'comments',
    
           options: {sort : {_id: -1}},
           populate: {
               path: 'user'
           }
        });
        if (!allProducts) return res.status(500).json({ success: false, msg: 'No products found' });

        return res.status(200).json({
            success: true,
            msg: 'All products',
            allProducts

        })

    } catch (err) {
        return res.status(500).json({ success: false, msg: err.message });
    }
}

module.exports = getAllProducts;