const express = require ('express')
const router = express.Router()

const {Login, register, data} = require('../controllers/usersControllers')