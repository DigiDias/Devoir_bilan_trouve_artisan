const categorieService = require('../services/categorieService');

exports.getCategories = async (req, res) => {
  try {
    const categories = await categorieService.getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
