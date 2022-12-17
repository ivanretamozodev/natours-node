const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const toursRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json());

//ROUTES

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', userRouter);

//SERVER LISTENER

module.exports = app;
