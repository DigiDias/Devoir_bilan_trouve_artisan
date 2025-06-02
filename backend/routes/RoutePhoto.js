const express = require('express');
const router = express.Router();

const photoController = require('../controllers/photoController');
const e = require('express');

// Route pour récupérer les photos d'un artisan par son ID
router.get('/:id', photoController.getPhotosByArtisanId);

module.exports = router;