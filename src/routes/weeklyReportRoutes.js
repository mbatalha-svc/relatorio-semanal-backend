const express = require('express');
const router = express.Router();
const weeklyReportController = require('../controllers/weeklyReportController');

// Rota para adicionar um relatório semanal
router.post('/add-weekly-report', weeklyReportController.addWeeklyReport);

// Outras rotas relacionadas a relatórios semanais...

module.exports = router;