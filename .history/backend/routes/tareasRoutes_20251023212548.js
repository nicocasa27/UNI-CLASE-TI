const express = require('express');
const router = express.Router();
const { getTareas, createTareas } = require('../controllers/tareaControllers');



router.get('/', getTareas);
router.post('/', createTareas);

router.put('/:id', updateTareas);

// router.get('/', (req, res) => {
//     res.status(200).json({"mensaje":"getTareas"})
// });

module.exports = router;