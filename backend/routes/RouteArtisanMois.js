const express = require('express');
const router = express.Router();
const artisanMoisController = require('../controllers/artisanMoisController');

// Route pour récupérer les artisans du mois
router.get('/', artisanMoisController.getArtisansMois);

module.exports = router;