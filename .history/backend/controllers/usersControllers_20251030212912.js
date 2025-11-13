const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const login = (req,res)=> {
res.status(200).json({message: 'Login'})
}

const register = asyncHandler(async (req,res)=> {
    const {nombre, email, password} = req.body //destructuring

    if(!nombre || !email || !password) {
        res.status(400)
        throw new Error('Faltan datos carnal')
    }

    //verificar si el usuario exist
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('El usuario ya existe')
    } else {
        //hash
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //crear usuario
        const user = await User.create({nombre, email, password: hashedPassword})

        if(user) {
            res.status(201).json({_id: user._id, nombre: user.nombre, email: user.email})
        } else {
    }

 })


    const data = (req,res)=> {
        res.status(200).json({message: 'Data'})
        }

        module.exports = {
            login,
            register,
            data
        }