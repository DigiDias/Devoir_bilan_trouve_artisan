const mysql = require('mysql2');
require('dotenv').config();
// Creation connexion à la base de données
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    });
// Connection à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de conenxion à la base de donnée', err);
        return;
    }
    console.log('Connexion à la base de données réussie');

});

// Export de la connexion pour l'utiliser dans d'autres fichiers
module.exports = connection;