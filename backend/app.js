const fs   = require('fs');
const path = require('path');
const express = require('express');
const serveur = require('./serveur');
require('dotenv').config();
const cors = require('cors');

// === DEBUG : vérifier si le dossier frontend/build existe ===
const frontendBuildPath = path.join(__dirname, '../frontend/build');
console.log('--- DEBUG: Chemin frontendBuildPath =', frontendBuildPath);
console.log('--- DEBUG: frontend/build existe ?', fs.existsSync(frontendBuildPath));
if (fs.existsSync(frontendBuildPath)) {
  console.log('--- DEBUG: Contenu de ../frontend :', fs.readdirSync(path.join(__dirname, '../frontend')));
  console.log('--- DEBUG: Contenu de build/:', fs.readdirSync(frontendBuildPath));
} else {
  console.log('--- DEBUG: frontend/build inexistant ou non généré.');
}
// ============================================================

const app = express();

// Middleware de logging des requêtes
app.use((req, res, next) => {
  console.log(`Requête reçue : ${req.method} ${req.path}`);
  next();
});

// Middleware généraux
app.use(cors());
app.use(express.json());

// Middleware pour servir les images statiques depuis le dossier "public/images"
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes de l'API
const categorieRoutes       = require('./routes/RouteCategorie');
const artisanRoutes         = require('./routes/RouteArtisans');
const artisanMoisRoutes     = require('./routes/RouteArtisanMois');
const listeArtisanRoutes    = require('./routes/RouteListeArtisan');
const RouteArtisanbyid      = require('./routes/RouteArtisanbyid');
const RouteSelectArtisan    = require('./routes/RouteSelectArtisan');
const RoutePhoto            = require('./routes/RoutePhoto');

app.use('/Categorie',            categorieRoutes);
app.use('/Artisans',             artisanRoutes);
app.use('/ArtisanMois',           artisanMoisRoutes);
app.use('/listeArtisan',          listeArtisanRoutes);
app.use('/listeArtisansByCategorie', RouteArtisanbyid);
app.use('/ArtisanById',           RouteSelectArtisan);
app.use('/Photo',                 RoutePhoto);

// Servir le frontend React (build)
app.use(express.static(frontendBuildPath));

// Catch-all pour l’application React
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
