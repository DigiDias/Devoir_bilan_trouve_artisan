const artisanSelectService = require('../services/artisanSelectService');

exports.getArtisanById = async (req, res) => {
  const id = req.params.id;

  try {
    const artisan = await artisanSelectService.getArtisanById(id);
    res.status(200).json(artisan);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'artisan :', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}