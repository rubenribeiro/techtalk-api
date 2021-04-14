const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/whiteboard-02',
    {useNewUrlParser: true, useUnifiedTopology: true}
);






// Configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});