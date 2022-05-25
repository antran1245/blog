const User = require('../models/user.models');

module.exports.createUser = (req, res) => {
    const {username, password, confirm, email} = req.body;
    User.create({
        username,
        password,
        email
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
}

module.exports.loginUser = (req, res) => {
    const {username, password} req.body;
    
}