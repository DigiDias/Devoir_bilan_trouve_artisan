const artisanByIdService = require('../services/artisanByIdService');

exports.getArtisanById = async (req, res) => {
  const artisanId = req.params.id;

  try {
    const artisan = await artisanByIdService.getArtisanById(artisanId);
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }
    res.json(artisan);
  } catch (error) {
    console.error('Error fetching artisan by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}