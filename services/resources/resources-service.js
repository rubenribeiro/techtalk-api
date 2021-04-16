//const resourcesModel = require('../../models/resources/resources-model');
const axios = require('axios');

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

module.exports = {
    findBooksBySearchTerm,
    findBookById,
}