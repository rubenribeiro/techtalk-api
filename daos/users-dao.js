const usersModel = require("../models/users/users-model");

const findAllUsers = () => {
    return usersModel.find();
}

const findUserByUsername = (username) => {
    return usersModel.findOne({username});
}

const createUser = (user) => {
    return usersModel.create(user);
};

const findUserByCredentials = (credentials) => {
    return usersModel.findOne({
        username: credentials.username,
        password: credentials.password
    })
}

const findUserById = (userId) => {
    return usersModel.findByIdAndDelete(userId);
}


const updateUser = (user) => {
    return usersModel.findByIdAndUpdate(user._id, {$set:user}, {new: true});
}

const deleteUser = (userId) => {
    return usersModel.findOneAndDelete(userId);
};

module.exports = {
    findUserByUsername,
    createUser,
    findUserByCredentials,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser,
}