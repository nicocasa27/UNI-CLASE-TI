const express = require('express');
const router = express.Router();
const { getTareas, createTareas } = require('../controllers/tareaControllers');



router.get('/', getTareas);
router.post('/', createTareas);

router.put('/:id', updateTareas);


module.exports = router;