const mongoose = require("mongoose");
const resourceSchema = require("./resources-schema");
const resourcesModel = mongoose.model("ResourceModel", resourceSchema);

module.exports = resourcesModel;