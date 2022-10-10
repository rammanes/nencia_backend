const { Product } = require('../../models/Product');

const postLike = async(req, res) => {
    try {
        let { postId } = req.params;
        let post = await Product.findOne({_id: postId});
	       let likeId = req.user._id;
			if (!post.likes.includes(likeId)) {
				await post.updateOne({ $push: { likes: likeId } });
                return res.status(201).json({
                    success: true,
                    msg: 'Product Liked',
                });
			} else {
				await post.updateOne({ $pull: { likes: likeId } });
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