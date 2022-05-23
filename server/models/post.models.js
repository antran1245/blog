const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'All post required a title.'],
        minLength: [3, 'Required a length of 3 character.']
    },
    content: {
        type: String,
        required: true,
        minLength: 3
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    }]
}, {timestamps: true})

const Post = mongoose.model('Posts', PostSchema);

module.exports = Post;