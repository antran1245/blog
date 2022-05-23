const CommentController = require('../controllers/comment.controllers');

module.exports = (app) => {
    app.get('/api/comments/index', CommentController.index);
    app.post('/api/comments/post', CommentController.createComment)
}