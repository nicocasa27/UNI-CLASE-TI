const asyncHandler = require('express-async-handler')
const Invitado = require('../models/invitadosModel')

const getInvitados = asyncHandler(async (req,res)=> {
    const invitados = await Invitado.find({residente: req.user.id})
    res.status(200).json(invitados)
})

const createInvitado = asyncHandler(async(req,res)=> {
    if(!req.body.nombreInvitado || !req.body.fechaInicio || !req.body.fechaFin){
        res.status(400)
        throw new Error('Faltan datos')
    }

    const invitado = await Invitado.create({
        nombreInvitado: req.body.nombreInvitado,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        horarioInicio: req.body.horarioInicio || '08:00',
        horarioFin: req.body.horarioFin || '20:00',
        residente: req.user.id
    })
    
    invitado.codigoQR = 'QR-' + invitado._id.toString()
    await invitado.save()

    res.status(201).json(invitado)
})

const updateInvitado = asyncHandler(async(req,res)=> {
    const invitado = await Invitado.findById(req.params.id)
    if(!invitado){
        res.status(404)
        throw new Error('Invitado no encontrado')
    }

    if(invitado.residente.toString() !== req.user.id){
        res.status(401)
        throw new Error('No autorizado')
    } else {
        const invitadoUpdated = await Invitado.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(invitadoUpdated)
    }
})

const revocarInvitado = asyncHandler(async(req,res)=> {
    const invitado = await Invitado.findById(req.params.id)
    
    if(!invitado){
        res.status(404)
        throw new Error('Invitado no encontrado')
    }

    if(invitado.residente.toString() !== req.user.id){
        res.status(401)
        throw new Error('No autorizado')
    } else {
        invitado.estado = 'revocado'
        await invitado.save()
        res.status(200).json({message: 'Acceso revocado', invitado})
    }
})

const validarQR = asyncHandler(async(req,res)=> {
    const {codigoQR} = req.body

    if(!codigoQR) {
        res.status(400)
        throw new Error('Falta el codigo QR')
    }

    const invitado = await Invitado.findOne({codigoQR})

    if(!invitado) {
        res.status(404)
        throw new Error('Codigo QR invalido')
    }

    if(invitado.estado !== 'activo') {
        res.status(400)
        throw new Error(`El acceso esta ${invitado.estado}`)
    }

    const ahora = new Date()
    if(ahora < invitado.fechaInicio || ahora > invitado.fechaFin) {
        invitado.estado = 'expirado'
        await invitado.save()
        res.status(400)
        throw new Error('El codigo QR ha expirado')
    }

    invitado.estado = 'usado'
    invitado.fechaUso = ahora
    await invitado.save()

    res.status(200).json({
        message: 'Acceso autorizado',
        invitado: {
            nombreInvitado: invitado.nombreInvitado,
            fechaUso: invitado.fechaUso
        }
    })
})

const deleteInvitado = asyncHandler(async(req,res)=> {
    const invitado = await Invitado.findById(req.params.id)
    
    if(!invitado){
        res.status(404)
        throw new Error('Invitado no encontrado')
    }

    if(invitado.residente.toString() !== req.user.id){
        res.status(401)
        throw new Error('No autorizado')
    } else {
        await invitado.deleteOne()
        res.status(200).json({id: req.params.id})
    }
})

module.exports = {
    getInvitados,
    createInvitado,
    updateInvitado,
    revocarInvitado,
    validarQR,
    deleteInvitado
}

