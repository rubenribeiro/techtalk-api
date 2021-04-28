const resourceModel = require("../models/resources/resources-model");

const findAllResources = () => {
    return resourceModel.find();
}

const findResourceById = (rid) => {
    return resourceModel.findOne({rid});
}

const createResource = (resource) => {
    return resourceModel.create(resource);
};

const updateResource = (resource) => {
    return resourceModel.updateOne({"_id": resource._id}, resource);
}

module.exports = {
    findAllResources,
    findResourceById,
    createResource,
    updateResource
}