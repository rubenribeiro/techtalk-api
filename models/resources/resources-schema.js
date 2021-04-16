const mongoose = require('mongoose');
const resourceSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            trim: true,
            required: true
        },
        type: {
            type: String,
            enum: ["BOOK", "VIDEO"]
        },
        dateUploaded: {
            type: Date,
            default: Date.now
        },
        votes: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        },
        link: {
            type: String,
            trim: true,
            required: true
        },
        votersList: [{
                type: mongoose.Schema.types.ObjectId,
                ref: 'users'
        }],
        comments: [{
            type: mongoose.Schema.types.ObjectId,
            ref: 'Comment'
        }],
    },
    {
        collection: "resources"
    }
)

module.exports = resourceSchema;