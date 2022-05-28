const Post = require('../models/post.models')
const User = require('../models/user.models')

module.exports.index = (req, res) => {
    res.json({
        message: "hello World"
    })
}

module.exports.createPost = (req, res) => {
    const {_id, title, content} = req.body;
    Post.create({
        user: _id,
        title,
        content
    })
    .then(post => {
        User.findOneAndUpdate(
            {_id: _id},
            {$push: {posts: post}})
        .then(user => {
            res.json(post)
        })
        .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
}

module.exports.allPosts = (req, res) => {
    Post.find().populate('comments')
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
}

module.exports.onePost = (req, res) => {
    Post.findOne({_id: req.params._id}).populate('comments')
    .then(post => res.json(post))
    .catch(err => res.json(err))
}

module.exports.deletePost = async(req, res) => {
    try {
        const commentArr = await Post.findOne({_id: req.params._id}).populate('comments')
    } catch (err) {
        console.log(err)
    }
}