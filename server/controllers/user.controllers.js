const User = require('../models/user.models');
const bcrypt = require('bcrypt');

module.exports.createUser = (req, res) => {
    const {username, password, confirm, email} = req.body;
    try {
            let user = User.create({
                username,
                password,
                email
            })
            res.json(user)
    } catch (err) {
        res.json(err)
    }
}

module.exports.loginUser = async(req, res) => {
    const {username, password} = req.body;
    try {
        let user = await User.findOne({username: username})
        const validPassword = await bcrypt.compare(password, user.password)
        console.log(validPassword)
        if(validPassword) {
            res.json({message: "ok"})
        } else {
            res.json({message: "error"})
        }
    } catch (err) {
        res.json(err)
    }
}