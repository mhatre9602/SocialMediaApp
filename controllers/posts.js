const Comment = require("../models/comments");
const Post = require("../models/post");

exports.getPosts = async (req, res, next) => {
  const response = await Post.findAll({
    include: { model: Comment, as: "comments" },
  });
  res.send(response);
};

exports.createPost = async (req, res, next) => {
  const response = await Post.create({
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  });
  res.send(response);
};

exports.createComment = async (req, res, next) => {
  const response = await Comment.create({
    comment: req.body.comment,
    postId: req.body.postId,
  });
  res.send(response);
};
