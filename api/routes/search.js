const express = require('express');
const router = express.Router();
const searchControler = require('../controllers/searchControlers')

router.post('/add', searchControler.add);
router.delete('/:id', searchControler.delete);

module.exports = router;