// src/services/photoArtisan.js
const PhotoArtisan = [
  {
    id_artisan: '1',
    photo: 'http://localhost:5000/images/boucher.jpg',
  },
  {
    id_artisan: '2',
    photo: 'http://localhost:5000/images/boulanger.jpg',
  },
    {
    id_artisan: '3',
    photo: 'http://localhost:5000/images/chocolatier.jpg',
  },
    {
    id_artisan: '4',
    photo: 'http://localhost:5000/images/traiteur.jpg',
  },
    {
    id_artisan: '5',
    photo: 'http://localhost:5000/images/chauffagiste.jpg',
  },
    {
    id_artisan: '6',
    photo: 'http://localhost:5000/images/Electricien.jpg',
  },
    {
    id_artisan: '7',
    photo: 'http://localhost:5000/images/boulanger.jpg',
  },
    {
    id_artisan: '2',
    photo: 'http://localhost:5000/images/menuisier.jpg',
  },
    {
    id_artisan: '8',
    photo: 'http://localhost:5000/images/plombier.jpg',
  },
    {
    id_artisan: '9',
    photo: 'http://localhost:5000/images/couturier.jpg',
  },

    {
    id_artisan: '10',
    photo: 'http://localhost:5000/images/ferronier.jpg',
  },
    {
    id_artisan: '11',
    photo: 'http://localhost:5000/images/ferronier.jpg',
  },
    {
    id_artisan: '12',
    photo: 'http://localhost:5000/images/coiffeur1.jpg',
  },
      {
    id_artisan: '13',
    photo: 'http://localhost:5000/images/coiffeur2.jpg',
  },
      {
    id_artisan: '14',
    photo: 'http://localhost:5000/images/coiffeur3.jpg',
  },
      {
    id_artisan: '15',
    photo: 'http://localhost:5000/images/fleuriste.jpg',
  },
      {
    id_artisan: '16',
    photo: 'http://localhost:5000/images/toiletteur.jpg',
  },
      {
    id_artisan: '17',
    photo: 'http://localhost:5000/images/webdisigner.jpg',
  },
];

const getPhotosByArtisanId = async (id) => {
  return PhotoArtisan.filter(p => p.id_artisan === id);
};

module.exports = { getPhotosByArtisanId };