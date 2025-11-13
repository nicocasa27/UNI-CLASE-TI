const jwt = require('jsonwebtoken')
const User = require('../models/usersModel')

const protect = async(req,res,next) => {

    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
           
            if(!req.user) {
                res.status(401)
                return next(new Error('Usuario no encontrado'))
            }
            
            next()
        
        } catch (error) {
            console.log(error)
            res.status(401)
            return next(new Error('No autorizado'))
        }

    }

    if(!token) {
        res.status(401)
        return next(new Error('No autorizado, no se proporcionó token'))
    }

}

module.exports = { protect }