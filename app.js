const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const toursRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//ROUTES

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', userRouter);

//SERVER LISTENER

module.exports = app;
