const UserController = require('../controllers/user.controllers');

module.exports = (app) => {
    app.post('/api/users/user', UserController.loginUser);
    app.post('/api/users/new', UserController.createUser);
}