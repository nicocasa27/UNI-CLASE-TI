const mongoose = require('mongoose')
require('colors')

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error('Error: MONGO_URI no está definida en las variables de entorno'.red)
            process.exit(1)
        }
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error('Error conectando a MongoDB:'.red, error.message)
        process.exit(1)
    }
}

module.exports = connectDB