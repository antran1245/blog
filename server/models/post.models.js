const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: 3
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
}, {timestamps: true})

const Post = mongoose.model('Posts', PostSchema);

module.exports = Post;