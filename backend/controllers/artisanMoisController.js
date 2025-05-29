const artisansMoisService = require('../services/artisanMoisService');

exports.getArtisansMois = async (req, res) => {
  try {
    const artisansMois = await artisansMoisService.getArtisansMois();
    res.json(artisansMois);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}