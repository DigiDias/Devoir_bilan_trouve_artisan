const e = require('express');
const db = require('../serveur'); // serveur MYSQL

exports.getArtisans = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT a.id_artisan, a.nom AS nom_artisan, c.id_categorie,c.nom AS nom_categorie FROM T_artisan a LEFT JOIN T_specialite b ON a.id_specialite = b.id_specialite LEFT JOIN T_categorie c ON b.id_categorie = c.id_categorie order by nom_artisan asc';
    db.query(sql, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}