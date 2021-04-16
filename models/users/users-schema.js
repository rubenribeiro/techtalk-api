const mongoose = require('mongoose');
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
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
        },
        role: {
            type: String,
            enum: ['ADMIN', 'USER']
        },
        date: {
            type: Date,
            default: Date.now
        },
    },
    {
        collection: "users"
    }
)

// usersSchema.methods.setPassword = (password) => {
//    passwordSalt = crypto.randomBytes(24).toString('hex');
//    passwordHash = crypto.pbkdf2Sync(password, passwordSalt, 1000, 64, 'sha512').toString('hex');
// };
//
// usersSchema.methods.validPassword = (password) => {
//     let hash = crypto.pbkdf2Sync(password, passwordSalt, 1000, 64, 'sha512').toString('hex');
//     return passwordHash === hash;
// };

module.exports = usersSchema;


// dateCreated: {
//     type: Date,
// default: Date.now
// },
// username: {
//     type: String,
//         trim: true,
//         required: true,
//         unique: true,
//         lowercase: true
// },
// passwordHash: {
//     type: String,
//         required: true
// },
// passwordSalt: {
//     type: String,
//         required: true
// },
// lastLogin: {
//     type: Date,
// default: Date.now
// },
// isAdmin: {
//     type: Boolean,
// default: false
// },
// isActive: {
//     type: Boolean,
// default: false
// },
// profileImg: {
//     type: String,
//         required: false
// },