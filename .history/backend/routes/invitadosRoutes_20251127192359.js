const express = require('express')
const router = express.Router()
const {
    getInvitados, 
    createInvitado, 
    updateInvitado, 
    revocarInvitado,
    validarQR,
    deleteInvitado
} = require('../controllers/invitadosControllers')
const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getInvitados)
router.post('/', protect, createInvitado)
router.put('/:id', protect, updateInvitado)
router.put('/:id/revocar', protect, revocarInvitado)
router.delete('/:id', protect, deleteInvitado)

router.post('/validar', validarQR)

module.exports = router

