const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usersSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
                trim: true,
                required: true
        },
        lastName: {
            type: String,
                trim: true,
                required: true
        },
        username: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            lowercase: true,
        },
        role: {
            type: String,
            enum: ['ADMIN', 'USER'],
            default: 'USER',
        },
        occupation: {
            type: String,
            default: "Unknown",
        },
        intro: {
            type: String,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        },
        favorites: {
            type: [String],
            default: []
        },
        date: {
            type: Date,
            default: Date.now
        },
    },
    {
        collection: "users",
        timestamps: true
    },
)
//TODO: Encrypt Password
module.exports = usersSchema;
