const Post = require('../models/post.models')

module.exports.index = (req, res) => {
    res.json({
        message: "hello World"
    })
}

module.exports.createPost = (req, res) => {
    const {title, content} = req.body;
    Post.create({
        title,
        content
    })
    .then(post => res.json(port))
    .catch(err => res.json(err))
}

module.exports.allPosts = (req, res) => {
    Post.find()
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