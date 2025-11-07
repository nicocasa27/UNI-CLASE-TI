const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose
    },
    texto: {
        type: String,
        required: [true, "Por favor teclea el texto de la tarea"]
    }
}, {
    timestamps: true
})

module.exports= mongoose.model('Tarea', tareaSchema)