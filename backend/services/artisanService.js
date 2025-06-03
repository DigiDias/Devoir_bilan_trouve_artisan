const db = require('../serveur'); // pool MySQL avec promise

exports.getArtisans = async () => {
  try {
    const sql = `
      SELECT a.id_artisan, a.nom AS nom_artisan, c.id_categorie, c.nom AS nom_categorie
      FROM t_artisan a
      LEFT JOIN t_specialite b ON a.id_specialite = b.id_specialite
      LEFT JOIN t_categorie c ON b.id_categorie = c.id_categorie
      ORDER BY nom_artisan ASC
    `;
    const [results] = await db.query(sql);
    return results;
  } catch (err) {
    throw err;
  }
};
