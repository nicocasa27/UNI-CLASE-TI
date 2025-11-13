conts bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const login = (req,res)=> {
res.status(200).json({message: 'Login'})
}

const register = (req,res)=> {
    res.status(200).json({message: 'Register'})
    }

    const data = (req,res)=> {
        res.status(200).json({message: 'Data'})
        }

        module.exports = {
            login,
            register,
            data
        }