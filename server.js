const express = require('express');
const server = express();
const cors = require('cors');
const usersRoute = require('./routes/users');
server.use('/users', usersRoute);
const productsRoute = require('./routes/products');
server.use('/products', productsRoute);
var corsOptions = {
    origin : 'http://localhost:8080'
};
server.use(cors(corsOptions));
server.use(express.json());