const db = require('../serveur'); // serveur
exports.getListeArtisans = async () => {
  try {
    const sql = `
      SELECT id_artisan, nom AS nom_artisan
      FROM T_artisan
    `;
    const [results] = await db.query(sql);
    return results;
  } catch (err) {
    throw err;
  }
};