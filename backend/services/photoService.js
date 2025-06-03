// src/services/photoArtisan.js
const PhotoArtisan = [
  {
    id_artisan: '1',
    photo: '1',
  },
  {
    id_artisan: '2',
    photo: '2',
  },
    {
    id_artisan: '3',
    photo: '3',
  },
    {
    id_artisan: '4',
    photo: '4',
  },
    {
    id_artisan: '5',
    photo: '5',
  },
    {
    id_artisan: '6',
    photo: '6',
  },
    {
    id_artisan: '7',
    photo: '7',
  },
    {
    id_artisan: '8',
    photo: '8',
  },
    {
    id_artisan: '9',
    photo: '9',
  },
    {
    id_artisan: '10',
    photo: '10',
  },

    {
    id_artisan: '11',
    photo: '11',
  },
    {
    id_artisan: '12',
    photo: '12',
  },
    {
    id_artisan: '13',
    photo: '13',
  },
      {
    id_artisan: '14',
    photo: '14',
  },
      {
    id_artisan: '15',
    photo: '15',
  },
      {
    id_artisan: '16',
    photo: '16',
  },
      {
    id_artisan: '17',
    photo: '17',
  },
      {
    id_artisan: '18',
    photo: '18',
  },
];

const getPhotosByArtisanId = async (id) => {
  return PhotoArtisan.filter(p => p.id_artisan === id);
};

module.exports = { getPhotosByArtisanId };