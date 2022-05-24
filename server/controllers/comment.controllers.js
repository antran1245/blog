const Comment = require('../models/comment.models');
const Post = require('../models/post.models')

module.exports.index = (req, res) => {
    res.json({
        message: "hello World"
    })
}

module.exports.createComment = async(req, res) => {
    try {
        const {content, id} = req.body;
        let comment = await Comment.create({
            content,
            post: id
            })
        let post = await Post.findOneAndUpdate(
            {_id: id}, 
            {$push: {comments: comment}}
            )
        res.json({message: "added comment to post"})
    } catch (err) {
        res.json(err)
    }
}