const express = require('express');
const router = express.Router();
const semanaController = require('../controllers/semanaController');


router.post('/add-semana', semanaController.addSemana);
router.get('/semanas', semanaController.getAllSemana);

module.exports = router;