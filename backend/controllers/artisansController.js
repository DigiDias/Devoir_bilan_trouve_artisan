const artisanService = require('../services/artisanService');

exports.getArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getArtisans();
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}