const { Product } = require("../../models/Product");
const { Comment } = require("../../models/Comment");

const createComment = async (req, res) => {
  try {
    const { comment } = req.body;
    let { postId } = req.params;
    let post = await Product.findOne({ _id: postId });
    if (!post)
      return res.status(500).json({ success: false, msg: "No Comment found" });
    const newComment = new Comment({
      comment,
      user: req.user._id,
    });
    await newComment.save();
    post.comments.push(newComment._id);
    await post.save();
    return res.status(201).json({
      success: true,
      msg: "comment successful",
      newComment,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = createComment;
