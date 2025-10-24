const asyncHandler = require('express-async-handler');

const getTareas = asyncHandler(async (req, res) => {
    res.status(200).json({"mensaje":"getTareas"})
})

const createTareas =asyncHandler(async (req, res) => {
    // res.status(200).json({"mensaje":"createTareas"})
    if(!req.body.texto){
        res.status(400)
        throw new Error('Por favor teclea el texto')
    }

    const tarea = await Tarea.create({
        texto: req.body.texto
})

const updateTareas =asyncHandler(async (req, res) => {
    res.status(200).json({"mensaje":"updateTareas"})
})


const deleteTareas =asyncHandler(async (req, res) => {
    res.status(200).json({"mensaje":"deleteTareas"})
})

module.exports = {
    getTareas, 
    createTareas, 
    updateTareas, 
    deleteTareas
}