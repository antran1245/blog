const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Require text to comment."]
    }
}, {timestamps: true})

const Comment = mongoose.model('Comments', CommentSchema);

module.exports = Comment;