const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const login = (req,res)=> {
res.status(200).json({message: 'Login'})
}

const register = (req,res)=> {
    const {nombre, email, password} = req.body //destructuring

    if(!nombre || !email || !password) {
        res.status(400)
        throw new Error('Fat')
    }


    const data = (req,res)=> {
        res.status(200).json({message: 'Data'})
        }

        module.exports = {
            login,
            register,
            data
        }