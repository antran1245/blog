const UserController = require('../controllers/user.controllers');

module.exports = (app) => {
    app.get('/api/users/logout', UserController.logout);
    app.post('/api/users/user', UserController.loginUser);
    app.post('/api/users/new', UserController.createUser);
}