const UserController = require('../controllers/user.controllers');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/users', authenticate, UserController.relogin);
    app.get('/api/users/logout', UserController.logout);
    app.post('/api/users/user', UserController.loginUser);
    app.post('/api/users/new', UserController.createUser);
}