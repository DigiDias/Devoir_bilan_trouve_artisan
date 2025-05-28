const db = require('../serveur'); // serveur MYSQL

exports.getCategories = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT nom, id_categorie FROM T_Categorie ORDER BY nom ASC';
    db.query(sql, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
