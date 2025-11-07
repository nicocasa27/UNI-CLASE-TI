const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String, 
        required : [true, "Porfavor telcea tu nombre"]

    },

    ombre: {
        type: String, 
        required : [true, "Porfavor telcea tu nombre"]

    },
})