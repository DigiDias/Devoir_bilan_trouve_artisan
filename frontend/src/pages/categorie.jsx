import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";


export default function Categorie() {
  const { id } = useParams(); // récupère l’ID dans l’URL
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const res = await fetch(`/listeArtisansByCategorie/${id}`);
        const data = await res.json();
        setArtisans(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des artisans :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [id]);

  const renderStars = (note) => {
    const totalStars = 5;
    const fullStars = Math.round(note);
    const emptyStars = totalStars - fullStars;

    return (
      <>
        <span style={{ color: '#ffc107' }}>{'★'.repeat(fullStars)}</span>
        <span style={{ color: '#e4e5e9' }}>{'★'.repeat(emptyStars)}</span>
      </>
    );
  };

  if (loading) return <p>Chargement...</p>;
  if (artisans.length === 0) return <p>Aucun artisan trouvé pour cette catégorie.</p>;

  return (
    <div className="container mt-4 Graphik-regular ">
      <h2 className="mb-4 text-center" >Artisans de la catégorie {artisans[0].nom_categorie}</h2>
      <div className="row">
        {artisans.map((artisan) => (
          <div className="col-md-4 mb-4" key={artisan.id_artisan}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center text-center">
                <h5 className="card-title">{artisan.nom_artisan}</h5>
                <p className="card-text">
                  <strong>Note :</strong> {renderStars(artisan.note)} ({artisan.note}/5)
                </p>
                <p className="card-text">
                  <strong>Spécialité :</strong> {artisan.specialite}
                </p>
                <p className="card-text">
                  <strong>Localisation :</strong> {artisan.ville}
                </p>
                <button className="btn btn-primary ">
                  <a href={`/artisan/${artisan.id_artisan}`} style={{ color: 'white', textDecoration: 'none' }}>
                    Voir le profil
                  </a>
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
