const express = require ('express')
const router = express.Router()

const {login, register, data} = require('../controllers/usersControllers')

//endpoints publicos
router