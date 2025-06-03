import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";

const Artisan = () => {
    const { id } = useParams(); // Récupère l'ID de l'artisan depuis l'URL
    const [artisan, setArtisan] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchArtisan = async () => {
        try {
            const res = await fetch(`/ArtisanById/${id}`);
            if (!res.ok) throw new Error('Erreur lors de la récupération de l’artisan');
            const data = await res.json();
            setArtisan(data);
        } catch (error) {
            console.error('Erreur :', error);
        } finally {
            setLoading(false);
        }
        };
    
        fetchArtisan();
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
    if (!artisan) return <p>Aucun artisan trouvé.</p>;
    
    return (
        <div className="container mt-4 Graphik-regular">
        <h2 className="mb-4 text-center">{artisan.nom_artisan}</h2>
        <div className="card shadow-sm">
            <div className="card-body">
            <h5 className="card-title">Détails de l'artisan</h5>
            <p className="card-text"><strong>Note :</strong> {renderStars(artisan.note)} ({artisan.note}/5)</p>
            <p className="card-text"><strong>Spécialité :</strong> {artisan.specialite}</p>
            <p className="card-text"><strong>Localisation :</strong> {artisan.ville}</p>
            <p className="card-text"><strong>Description :</strong> {artisan.description}</p>
            <p className="card-text"><strong>Site Web :</strong> {artisan.site_web || 'pas de site'}</p>
            <img src={artisan.photo || 'lartisan ne dispose pas de photo'} alt={`Photo de l'artisan et ${artisan.specialite}`} className="img-fluid mb-3 text-center" />

            </div>
        </div>
        </div>
    );
    }

    export default Artisan;
