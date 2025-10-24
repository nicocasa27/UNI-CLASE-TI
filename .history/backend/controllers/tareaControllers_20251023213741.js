const asyncHandler = require('express-async-handler');

const getTareas =asyncHandler(async (req, res) => {
    res.status(200).json({"mensaje":"getTareas"})
}

const createTareas =async (req, res) => {
    res.status(200).json({"mensaje":"createTareas"})
}

const updateTareas =async (req, res) => {
    res.status(200).json({"mensaje":"updateTareas"})
}

const deleteTareas =async (req, res) => {
    res.status(200).json({"mensaje":"deleteTareas"})
}

module.exports = {
    getTareas, 
    createTareas, 
    updateTareas, 
    deleteTareas
}