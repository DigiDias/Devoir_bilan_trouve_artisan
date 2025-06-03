// src/services/photoArtisan.js
const PhotoArtisan = [
  {
    id_artisan: '1',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/boucher.jpg',
  },
  {
    id_artisan: '2',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/boulanger.jpg',
  },
    {
    id_artisan: '3',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/Chocolatier.jpg',
  },
    {
    id_artisan: '4',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/traiteur.jpg',
  },
    {
    id_artisan: '5',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/chauffagiste.jpg',
  },
    {
    id_artisan: '6',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/Electricien.jpg',
  },
    {
    id_artisan: '7',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/menuisier.jpg',
  },
    {
    id_artisan: '8',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/plombier.jpg',
  },
    {
    id_artisan: '9',
    photo: '9https://devoir-bilan-trouve-artisan.onrender.com/images/bigoutier.jpg',
  },
    {
    id_artisan: '10',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/couturier.jpg',
  },

    {
    id_artisan: '11',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/ferronier.jpg',
  },
    {
    id_artisan: '12',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/coiffeur1.jpg',
  },
    {
    id_artisan: '13',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/coiffeur2.jpg',
  },
      {
    id_artisan: '14',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/coiffeur3.jpg',
  },
      {
    id_artisan: '15',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/fleuriste.jpg',
  },
      {
    id_artisan: '16',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/toiletteur.jpg',
  },
      {
    id_artisan: '17',
    photo: 'https://devoir-bilan-trouve-artisan.onrender.com/images/webdisigner.jpg',
  },
    
];

const getPhotosByArtisanId = async (id) => {
  return PhotoArtisan.filter(p => p.id_artisan === id);
};

module.exports = { getPhotosByArtisanId };