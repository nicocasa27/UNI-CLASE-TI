const getTareas =async (req, res) => {
    res.status(200).json({"mensaje":"getTareas"})
}

const createTareas =async (req, res) => {
    res.status(200).json({"mensaje":"createTareas"})
}

const updateTareas =a (req, res) => {
    res.status(200).json({"mensaje":"updateTareas"})
}

const deleteTareas = (req, res) => {
    res.status(200).json({"mensaje":"deleteTareas"})
}

module.exports = {
    getTareas, 
    createTareas, 
    updateTareas, 
    deleteTareas
}