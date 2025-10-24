const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;
const connectDB = require('../config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/api/saludo', (req, res) => {
//     res.status(200).json({ message: 'Hola Mundo' });
// });

app.use('/api/tareas', require('./routes/tareasRoutes'));

// app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));