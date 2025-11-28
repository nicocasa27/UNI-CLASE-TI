const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Resident = require('../models/residentsModel')

const login = asyncHandler(async (req,res)=> {
    
    const {departamento, password} = req.body

    const resident = await Resident.findOne({departamento})

    if(resident && (await bcrypt.compare(password, resident.password))) {

        res.status(200).json({
            _id: resident.id,
            nombre: resident.nombre,
            departamento: resident.departamento,
            esAdmin: resident.esAdmin,
            token: generateToken(resident.id)
        })

    } else {
        res.status(401)
        throw new Error('Credenciales invalidas')
    }

})

const register = asyncHandler(async (req,res)=> {
    const {nombre, departamento, password} = req.body

    if(!nombre || !departamento || !password) {
        res.status(400)
        throw new Error('Faltan datos')
    }

    const residentExists = await Resident.findOne({departamento})
    if(residentExists) {
        res.status(400)
        throw new Error('Este departamento ya esta registrado')
    } else {
        const hashedPassword = await bcrypt.hash(password, 10)

        const resident = await Resident.create({
            nombre, 
            departamento,
            password: hashedPassword
        })

        if(resident) {
            res.status(201).json({
                _id: resident.id,
                nombre: resident.nombre,
                departamento: resident.departamento,
                token: generateToken(resident.id)
            })
        } else {
            res.status(400)
            throw new Error('Datos invalidos')
        }
    }
})

const data = (req,res)=> {
    res.status(200).json({
        message: 'Data',
        resident: req.user
    })
}
     
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    login,
    register,
    data
}

