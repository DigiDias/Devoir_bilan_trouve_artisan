const db = require('../serveur');

exports.getCategories = async () => {
  try {
    const [results] = await db.query('SELECT nom, id_categorie FROM t_categorie ORDER BY nom ASC');
    return results;
  } catch (err) {
    throw err;
  }
};