const db = require('../serveur'); // serveur MYSQL
const photoService = require('./photoService');

exports.getArtisanById = async (id) => {
  try {
    const [results] = await db.query(`
      SELECT a.id_artisan, a.nom AS nom_artisan, c.nom AS nom_categorie, a.note, a.A_propos AS description,
             a.email, a.site_web, b.nom AS specialite, d.nom AS ville 
      FROM T_artisan a
      LEFT JOIN T_specialite b ON a.id_specialite = b.id_specialite
      LEFT JOIN t_Categorie c ON b.id_categorie = c.id_categorie
      LEFT JOIN t_ville d ON a.id_ville = d.id_ville
      WHERE a.id_artisan = ?;
    `, [id]);
    
    if (results.length === 0) {
      throw new Error('Artisan not found');
    }

    const artisan = results[0];

    // Ajout de la photo
    const photos = await photoService.getPhotosByArtisanId(id);
    artisan.photo = photos.length > 0 ? photos[0].photo : null;

    return artisan;
  } catch (err) {
    throw err;
  }
}
