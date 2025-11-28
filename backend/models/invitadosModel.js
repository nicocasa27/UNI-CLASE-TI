const mongoose = require('mongoose')

const invitadoSchema = mongoose.Schema({
    residente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resident',
        required: true
    },
    nombreInvitado: {
        type: String,
        required: [true, "Porfavor telcea el nombre del invitado"]
    },
    codigoQR: {
        type: String,
        unique: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    horarioInicio: {
        type: String,
        default: '08:00'
    },
    horarioFin: {
        type: String,
        default: '20:00'
    },
    estado: {
        type: String,
        default: 'activo'
    },
    fechaUso: {
        type: Date
    }
})

module.exports = mongoose.model('Invitado', invitadoSchema)

