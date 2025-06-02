const express = require('express');
const router = express.Router();
const artisanSelectController = require('../controllers/artisanSelectController');

// Route pour récupérer un artisan par son ID
router.get('/:id', artisanSelectController.getArtisanById);

module.exports = router;