const usersModel = require("../models/users/users-model");

const findAllUsers = () => {
    return usersModel.find();
}

const findUserByUsername = (username) => {
    return usersModel.findOne({username});
}

const createUser = (user) => {
    console.log("CREATE USER \n");
    console.log(JSON.stringify(user));
    return usersModel.create(user);
};

const findUserByCredentials = (credentials) => {
    return usersModel.findOne({
        username: credentials.username,
        password: credentials.password
    })
}

module.exports = {
    findUserByUsername,
    createUser,
    findUserByCredentials,
    findAllUsers,
}