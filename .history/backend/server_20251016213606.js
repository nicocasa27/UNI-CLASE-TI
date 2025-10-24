const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/api/saludo', (req, res) => {
//     res.status(200).json({ message: 'Hola Mundo' });
// });

app.use

// app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));