//! NGO Website Main Server
require('dotenv').config();
const express = require('express');
const app = express();
const indexRouter = require('./routes/index')

//? Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

//? Routes 
app.use('/', indexRouter);

//? Server & DB
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
})