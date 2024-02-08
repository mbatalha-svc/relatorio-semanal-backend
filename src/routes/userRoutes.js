const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para adicionar usuário
router.post('/add-user', userController.addUser);

// Rota para login
router.post('/login', userController.login);

module.exports = router;
