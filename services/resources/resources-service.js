const axios = require('axios');
const resourcesDao = require('../../daos/resources-dao');

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';

const findBooksBySearchTerm = (queryTerm) => {
    return axios.get(`${BOOKS_URL}?q=${queryTerm}`)
        .then(response => response.data)
        .catch( err => {
            console.log(`${BOOKS_URL}?=${queryTerm}`);
            console.log(err.response.data);
        });
}

const findBookById = (bookId) => {
    return axios.get(`${BOOKS_URL}/${bookId}`)
        .then(response => response.data)
        .catch( err => {
            console.log(err.response.data);
        });
}

const createResource = (resource) =>
    resourcesDao.createResource(resource);

const findResourceById = (rid) =>
    resourcesDao.findResourceById(rid);

module.exports = {
    findBooksBySearchTerm,
    findBookById,
    createResource,
    findResourceById,
}