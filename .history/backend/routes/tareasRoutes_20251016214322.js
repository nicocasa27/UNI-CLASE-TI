const express = require('express');
const router = express.Router();
con



router.get('/', (req, res) => {
    res.status(200).json({"mensaje":"getTareas"})
});

module.exports = router;