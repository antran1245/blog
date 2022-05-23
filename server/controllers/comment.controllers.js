const Comment = require('../models/comment.models');
const Post = require('../models/post.models')

module.exports.index = (req, res) => {
    res.json({
        message: "hello World"
    })
}

module.exports.createComment = async(req, res) => {
    const {content, id} = req.body;
    let comment = await Comment.create({
        content,
        post: id
    })
    let post = await Post.findOneAndUpdate({_id: id}, 
        {$push: {comments: comment}})
    .then(resp => {
        res.json(resp)
    })
    .catch(err => res.json(err))
    // console.log(post.comments)
    // .then(comment => res.json(comment))
    // .catch(err => res.json(err))
    // await Post.findOneAndUpdate(
    //     {_id: id},
    //     {comments: [...post.comments, comment]}
    // )
    // post.comments.push(comment)
    console.log('done')
}