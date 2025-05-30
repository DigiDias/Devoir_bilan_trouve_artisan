const express = require('express');
const router = express.Router();
const artisanByIdController = require('../controllers/artisanByIdController');

// Route pour récupérer un artisan par son ID
router.get('/:id', artisanByIdController.getArtisanById);

module.exports = router;