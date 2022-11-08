const { Category } = require('../../models/Category');

const getAllCategories = async(req, res) => {
    try { 
        const allCategories = await Category.find({},  null, {sort: { category: 1}})
        if (!allCategories) return res.status(500).json({ success: false, msg: 'No Categories found' });

        return res.status(200).json({
            success: true,
            msg: 'All Categories',
            allCategories
        })

    } catch (err) {
        return res.status(500).json({ success: false, msg: err.message });
    }
}

module.exports = getAllCategories;