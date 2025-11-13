conts bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const login = (req,res)=> {
res.status(200).json({message: 'Login'})
}

const register = (req,res)=> {
    const
    }

    const data = (req,res)=> {
        res.status(200).json({message: 'Data'})
        }

        module.exports = {
            login,
            register,
            data
        }