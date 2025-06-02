const photoService = require('../services/photoService');

exports.getPhotosByArtisanId = async (req, res) => {
  const artisanId = req.params.id;

  try {
    const photos = await photoService.getPhotosByArtisanId(artisanId);
    if (photos.length === 0) {
      return res.status(404).json({ message: 'Aucune photo trouvée pour cet artisan.' });
    }
    res.status(200).json(photos);
  } catch (error) {
    console.error('Erreur lors de la récupération des photos :', error);
    res.status(500).json({ message: 'Erreur interne du serveur.' });
  }
}