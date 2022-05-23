const PostController = require('../controllers/post.controllers');

module.exports = (app) => {
    app.get('/api/posts/index', PostController.index);
    app.get('/api/posts', PostController.allPosts);
    app.get('/api/posts/:_id', PostController.onePost);
    app.post('/api/posts/new', PostController.createPost);
    app.delete('/api/posts/:_id', PostController.deletePost);
}