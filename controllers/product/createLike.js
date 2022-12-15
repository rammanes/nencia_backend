const { Product } = require('../../models/Product');

const postLike = async(req, res) => {
    try {
        let { postId } = req.params;
        let post = await Product.findOne({_id: postId});
	       let likeId = req.user._id;
           let productLike = post.likes.filter(data => (data.user == likeId))

           if (productLike.length == 0) {
            await post.updateOne({ $push: { likes: {user: likeId} } });
            return res.status(201).json({
                success: true,
                msg: 'Product Liked',
            });
    
        } else {
            await post.updateOne({ $pull: { likes: {user: likeId} } });
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