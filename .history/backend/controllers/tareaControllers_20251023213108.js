const getTareas = (req, res) => {
    res.status(200).json({"mensaje":"getTareas"})
}

const createTareas = (req, res) => {
    res.status(200).json({"mensaje":"createTareas"})
}

const updateTareas = (req, res) => {
    res.status(200).json({"mensaje":"updateTareas"})
}

module.exports = {
    getTareas, 
    createTareas, 
    updateTareas, 
    deleteTareas
}