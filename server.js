const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const session = require('express-session');
const config = require('config');
const connectDB = require('./config/db');


const SESSION_SECRET_LOCAL = config.get('sessionSecretLocal');
const SESSION_SECRET = process.env.SESSION_SECRET || SESSION_SECRET_LOCAL;

// session setup
app.use(session({
    secret: `${SESSION_SECRET}`,
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}));


// Db Setup
connectDB();

// Configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Init Middleware
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({ type: '*/*' }));


// Routes
require('./controllers/resources-controller')(app);
require('./controllers/users-controller')(app);

app.listen(port, () => {
    console.log(`Server Listening on  port ${port}`);
})