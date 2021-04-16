const usersModel = require("../models/users/users-model");

const findUserByUsername = (email) => {
    return usersModel.find({email});
}

const createUser = (user) => {
    return usersModel.create({user});
};

const findUserByCredentials = (credentials) => {
    return usersModel.findOne({
        username: credentials.email,
        password: credentials.password
    })
}

module.exports = {
    findUserByUsername,
    createUser,
    findUserByCredentials
}