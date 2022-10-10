const { Product } = require('../../models/Product');
const { Like } = require('../../models/Like');

const postLike = async(req, res) => {
    try {
        let { postId } = req.params;
        let postExist = await Product.findOne({ _id: postId });
			let likeId = req.user.id;
			if (!postExist.likes.includes(likeId)) {
				await postExist.updateOne({ $push: { likes: likeId } });
                return res.status(201).json({
                    success: true,
                    msg: 'Product Liked',
                });
			} else {
				await postExist.updateOne({ $pull: { likes: likeId } });
                return res.status(201).json({
                    success: true,
                    msg: 'Product Unliked',
                });
			}
      }catch(err) {
        console.log(err);
      }
}
module.exports = postLike;