const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, "Username is required"],
        unique: [true, "Username already used"]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [3, 'Password is at least 3 characters long.']
    }
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, "Email already used"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    }
}, {timestamps: true})

const User = mongoose.model('Users', UserSchema);

module.exports = User;