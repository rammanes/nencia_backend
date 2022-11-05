const { Category } = require('../../models/Category');


const createCategory = async (req, res, next) => {
  try {
    let { category } = req.body;
   
    const newCategory = new Category({
      category
    });

    await newCategory.save();
    if(!newCategory) return res.status(500).json({msg: 'An error has occurred'});

    res.status(201).json({
      success: true,
      msg: 'Category saved successfully',
      category: {
        newCategory
      }
    })

  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
}

module.exports = createCategory;
