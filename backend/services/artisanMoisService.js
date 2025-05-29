const db = require('../serveur'); // serveur MYSQL

exports.getArtisansMois = async() => {
 try {
    const [results] = await db.query(`
select a.nom, a.note, b.nom as specialite, c.nom as localisation  from t_artisan a
left join t_specialite b on a.id_specialite = b.id_specialite
left join t_ville c on a.id_ville = c.id_ville
where top = 1;
   `);
   return results;
 }  catch (err) {
    throw err;
  }
};