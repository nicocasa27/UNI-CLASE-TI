const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String, 
        required : [true, "Porfavor telcea tu nombre"]

    },

    email: {
        type: String, 
        required : [true, "Porfavor telcea tu email"],
        unique: true

    },

    password: {
        type: String, 
        required : [true, "Porfavor telcea tu password"]

    },


})