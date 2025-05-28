const express = require('express');
const serveur = require('./serveur');
require('dotenv').config();
const cors = require('cors');
const categorieRoutes = require('./routes/RouteCategorie');
const artisanRoutes = require('./routes/RouteArtisans');

const app = express();
app.use(cors());  // <-- Autorise toutes les origines 

// Middleware pour parser le JSON 
app.use(express.json());

// Utiliser la route /api
app.use('/Categorie', categorieRoutes);
app.use('/Artisans', artisanRoutes);

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en ecoute sur le Port ${PORT}`);
});