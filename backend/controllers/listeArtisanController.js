const listeArtisanService = require('../services/listeArtisanService');

exports.getListeArtisans = async (req, res) => {
  try {
    const artisans = await listeArtisanService.getListeArtisans();
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}   