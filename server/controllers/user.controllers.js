const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.createUser = async(req, res) => {
    const {username, password, confirm, email} = req.body;
    try {
        let user = await User.create({
            username,
            password,
            email
        })
        const userToken = await jwt.sign({
            _id: user._id,
            username: user.username
        }, process.env.SECRET_KEY)
        res.cookie('usertoken', userToken, process.env.SECRET_KEY, {
            httpOnly: true
        })
        .json(user)
        // res.json(user)
    } catch (err) {
        res.json(err)
    }
}

module.exports.loginUser = async(req, res) => {
    const {username, password} = req.body;
    try {
        let user = await User.findOne({username: username})
        const validPassword = await bcrypt.compare(password, user.password)
        if(validPassword) {
            const userToken = await jwt.sign({
                _id: user._id,
                username: user.username
            }, process.env.SECRET_KEY)
            res.cookie('usertoken', userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({message: "ok", user: {_id: user.id, username: user.username}})
            // console.log(userToken)
            // res.json({message: "ok", user: {_id: user.id, username: user.username}})
        } else {
            res.status(400).json({message: "Invalid Username/Password"})
        }
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}