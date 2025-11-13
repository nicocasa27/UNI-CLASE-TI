const jwt = require('jsonwebtoken')
const User = require('../models/usersModel')

const protect = (req,res,next) => {
    try {
        let token

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            
        }

    } catch (error) {

    }
}