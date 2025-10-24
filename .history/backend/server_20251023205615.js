const express = require('express');
const cors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;
const connectDB = require('../config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/tareas', require('./routes/tareasRoutes'));


app.listen(port, () => console.log(`Server running on port ${port}`));