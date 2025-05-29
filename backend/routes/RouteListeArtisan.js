const express = require('express');
const router = express.Router();
const listeArtisanController = require('../controllers/listeArtisanController');

// Route pour récupérer la liste des artisans
router.get('/', listeArtisanController.getListeArtisans);

module.exports = router;