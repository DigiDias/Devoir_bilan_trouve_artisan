const express = require('express');
const serveur = require('./serveur');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en ecoute sur le Port ${PORT}`);
});