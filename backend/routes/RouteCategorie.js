const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categoriesController');

router.get('/', categorieController.getCategories);

module.exports = router;
