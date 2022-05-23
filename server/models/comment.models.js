const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Require text to comment."]
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    }
}, {timestamps: true})

const Comment = mongoose.model('Comments', CommentSchema);

module.exports = Comment;