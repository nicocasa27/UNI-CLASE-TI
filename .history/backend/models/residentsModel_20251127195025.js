const mongoose = require('mongoose')

const residentSchema = mongoose.Schema({
    nombre: {
        type: String, 
        required: [true, "Porfavor telcea tu nombre"]
    },

    departamento: {
        type: String, 
        required: [true, "Porfavor telcea tu departamento"],
        unique: true
    },

    password: {
        type: String, 
        required: [true, "Porfavor telcea tu contrasena"]
    },

    esAdmin: {
        type: Boolean, 
        default: false
    }

})

module.exports = mongoose.model('Resident', residentSchema)

