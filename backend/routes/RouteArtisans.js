const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisansController');
// Route pour récupérer tous les artisans

router.get('/', artisanController.getArtisans);

module.exports = router;
