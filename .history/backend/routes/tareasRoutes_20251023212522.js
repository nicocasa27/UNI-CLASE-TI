const express = require('express');
const router = express.Router();
const { getTareas } = require('../controllers/tareaControllers');



router.get('/', getTareas);
router.post('/', Tareas);


// router.get('/', (req, res) => {
//     res.status(200).json({"mensaje":"getTareas"})
// });

module.exports = router;