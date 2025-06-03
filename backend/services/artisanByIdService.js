const db = require('../serveur'); // serveur MYSQL

exports.getArtisanById = async (id) => {
  try {
    const [results] = await db.query(`
   select a.id_artisan, a.nom as nom_artisan, c.nom as nom_categorie, a.note, a.A_propos as description,a.email, a.site_web, b.nom as specialite, d.nom as ville from t_artisan a
  left join t_specialite b on a.id_specialite = b.id_specialite
  left join t_categorie c on b.id_categorie = c.id_categorie
  left join t_ville d on a.id_ville = d.id_ville
  WHERE c.id_categorie = ?;
    `, [id]);
    
    if (results.length === 0) {
      throw new Error('Artisan not found');
    }
    
    return results;
  } catch (err) {
    throw err;
  }
}