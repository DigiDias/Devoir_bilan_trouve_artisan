import React, { useEffect, useState } from "react";
import "../App.css";

const Accueil = () => {
  const [categories, setCategories] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [categorieSelection, setCategorieSelection] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [artisanMois, setArtisanMois] = useState([]);

  const handleArtisanChange = (e) => {
    const selectedId = Number(e.target.value);
    const artisan = artisans.find((a) => a.id_artisan === selectedId);
    setSelectedArtisan(artisan);
    setShowForm(!!artisan);
  };

  const artisanFiltre =
    Array.isArray(artisans) && categorieSelection
      ? artisans.filter(
          (artisan) => artisan.id_categorie === Number(categorieSelection)
        )
      : Array.isArray(artisans)
      ? artisans
      : [];


      const renderStars = (note) => {
  const maxStars = 5;
  const filledStars = Math.round(note); // arrondir la note
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < filledStars) {
      stars.push(<span key={i} style={{color: 'gold'}}>★</span>); // étoile pleine
    } else {
      stars.push(<span key={i} style={{color: '#ccc'}}>☆</span>); // étoile vide
    }
  }

  return stars;
};

  useEffect(() => {
    fetch("/categorie")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          console.error("Données catégories inattendues :", data);
          setCategories([]);
        }
      })
      .catch((err) => {
        console.error("Erreur catégories :", err);
        setCategories([]);
      });
  }, []);

  useEffect(() => {
    fetch("/artisans")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setArtisans(data);
        } else if (Array.isArray(data.artisans)) {
          setArtisans(data.artisans);
        } else {
          console.error("Données artisans inattendues :", data);
          setArtisans([]);
        }
      })
      .catch((err) => {
        console.error("Erreur artisans :", err);
        setArtisans([]);
      });
  }, []);


  useEffect(() => {
    fetch("/artisanMois")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setArtisanMois(data);
        } else if (Array.isArray(data.artisans)) {
          setArtisanMois(data.artisans);
        } else {
          console.error("Données artisans du mois inattendues :", data);
          setArtisanMois([]);
        }
      })
      .catch((err) => {
        console.error("Erreur artisans du mois :", err);
        setArtisanMois([]);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Comment trouver mon artisan</h1>

      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <h2>1 - Choisir la catégorie d’artisanat dans le menu.</h2>
            <label htmlFor="categorie" className="form-label">
              Catégorie d'artisanat
            </label>
            <select
              className="form-select mb-3"
              id="categorie"
              style={{ width: "300px" }}
              value={categorieSelection}
              onChange={(e) => setCategorieSelection(e.target.value)}
            >
              <option value="">-- Sélectionnez une catégorie --</option>
              {Array.isArray(categories) &&
                categories.map((cat) => (
                  <option key={cat.id_categorie} value={cat.id_categorie}>
                    {cat.nom}
                  </option>
                ))}
            </select>
          </div>

          <div className="d-flex flex-column">
            <h2>2 - Choisir un artisan.</h2>
            <label htmlFor="artisan" className="form-label">
              Liste des artisans
            </label>
            <select
              className="form-select mb-3"
              id="artisan"
              style={{ width: "300px" }}
              value={selectedArtisan?.id_artisan || ""}
              onChange={handleArtisanChange}
            >
              <option value="">-- Sélectionnez un artisan --</option>
              {artisanFiltre.map((artisan) => (
                <option key={artisan.id_artisan} value={artisan.id_artisan}>
                  {artisan.nom_artisan}
                </option>
              ))}
            </select>
          </div>
        </div>



        {showForm && (
          <div className="ms-4">
            <h2>3. Le contacter via le formulaire de contact.</h2>
            <p>Pour contacter votre artisan <strong>{selectedArtisan?.nom_artisan}</strong></p>
            <p>Veuillez remplir le formulaire ci-dessous :</p>
            <h2>4. Une réponse sera apportée sous 48h. </h2>

</div>)}
</div>
{showForm && (
  
  <div>
  <h3 className="text-center">Formulaire de contact pour <strong>{selectedArtisan?.nom_artisan}</strong></h3>

  <form className="d-flex flex-column gap-3 mt-4">
    <div className="row">
    <div className="col">
      <input
        type="text"
        className="form-control"
        placeholder="Nom"
        aria-label="Nom"
        required
      />
    </div>
    <div className="col">
      <input
        type="text"
        className="form-control"
        placeholder="Prenom"
        aria-label="Prenom"
        required
      />
    </div>
    </div>

     <div className="row">
        <div className="col">
      <input
        type="tel"
        className="form-control"
        placeholder="Teléphone"
        aria-label="Tel"
        required
      />
    </div>
    <div className="col">
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        aria-label="Email"
        required
      />
    </div>
    </div>

    <div className="col">
      <textarea
        type="message"
        className="form-control"
        placeholder="Votre message"
        aria-label="message"
      style={{ height: "10rem" }}
      required/>
    

    </div>
    <div className="dflex text-center">
    <button type="submit" class="btn btn-primary text-center" style={{ width: "7rem" }} >Envoyer</button>
    </div>
  </form>
  </div>

        )}
      

      <h3 className="text-center mt-5">Les 3 artisans du mois</h3>
      <div className="d-flex flex-wrap justify-content-center mt-3 gap-5">
        {[1, 2, 3].map((_, idx) => (
          <div className="card" style={{ width: "18rem" }} key={idx}>
            <div className="card-body">
              <h5 className="card-title text-center">{artisanMois[idx]?.nom || "Artisan du mois"}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary text-center">
                {artisanMois[idx]?.specialite || "Spécialité de l'artisan"}
              </h6>
              <p className="card-text text-center">
                {`Localisation : ${artisanMois[idx]?.localisation || "localisation de l'artisan"}`}<br />
                Note : {artisanMois[idx]?.note ? renderStars(artisanMois[idx].note) : "Note de l'artisan"}
              </p>
              <a href="/" className="card-link">
                Card link
              </a>
              <a href="/" className="card-link">
                Another link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;
