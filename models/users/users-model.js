const mongoose = require("mongoose");
const userSchema = require("./users-schema");
const usersModel = mongoose.model("UserModel", userSchema);

module.exports = usersModel;