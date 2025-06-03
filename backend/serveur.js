const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Utilisation de la version promise pour simplifier la gestion async
const promisePool = pool.promise();

promisePool.getConnection()
  .then(conn => {
    console.log('Connexion à la base de données réussie');
    conn.release(); // libérer la connexion immédiatement
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données', err);
  });

module.exports = promisePool;
