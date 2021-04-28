const mongoose = require('mongoose');
const resourceSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            trim: true,
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
        upVotersList: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',
                default: []
        }],
        dowVotersList: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            default: []
        }],
    },
    {
        collection: "resources"
    }
)

module.exports = resourceSchema;