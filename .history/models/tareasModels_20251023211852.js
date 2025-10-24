const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor agrega un nombre'],
    },
    descripcion: {
        type: String,
        required: [true, 'Por favor agrega una descripcion'],
    },
});