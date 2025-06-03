const express = require('express');
const serveur = require('./serveur');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

// Import des routes
const categorieRoutes = require('./routes/RouteCategorie');
const artisanRoutes = require('./routes/RouteArtisans');
const artisanMoisRoutes = require('./routes/RouteArtisanMois');
const listeArtisanRoutes = require('./routes/RouteListeArtisan');
const RouteArtisanbyid = require('./routes/RouteArtisanbyid');
const RouteSelectArtisan = require('./routes/RouteSelectArtisan');
const RoutePhoto = require('./routes/RoutePhoto');



const app = express();

// Middleware de logging des requêtes
app.use((req, res, next) => {
  console.log(`Requête reçue : ${req.method} ${req.path}`);
  next();
});

// Middleware généraux
app.use(cors()); // Autorise toutes les origines
app.use(express.json()); // Parse le JSON entrant

// Middleware pour servir les images statiques depuis le dossier "public/images"
app.use('/images', express.static(path.join(__dirname, 'public/images')));

//Routes de l'API
app.use('/Categorie', categorieRoutes);
app.use('/Artisans', artisanRoutes);
app.use('/ArtisanMois', artisanMoisRoutes);
app.use('/listeArtisan', listeArtisanRoutes);
app.use('/listeArtisansByCategorie', RouteArtisanbyid);
app.use('/ArtisanById', RouteSelectArtisan);
app.use('/Photo', RoutePhoto);

// === Servir le frontend React (build) ===
const frontendBuildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(frontendBuildPath));

// Pour toute autre route, renvoyer index.html de React (SPA)


// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
