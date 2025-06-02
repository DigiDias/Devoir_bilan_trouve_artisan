import  { useEffect, useState } from "react";
import "../App.css";

// const palette = {
//   headerBg: '#0074c7',
//   bleuClair: '#f1f8fc',
//   bleufoncer: '#00497c',
//   gris: '#385050',
//   rouge: '#cd2c2e',
//   vert: '#82b864',
//   text: 'white',
// };

const Accueil = () => {
  const [categories, setCategories] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [categorieSelection, setCategorieSelection] = useState("");
 /* const [showForm, setShowForm] = useState(false);*/
  /*const [selectedArtisan, setSelectedArtisan] = useState(null);*/
  const [artisanMois, setArtisanMois] = useState([]);
  




 /*const handleArtisanChange = (e) => {
    const selectedId = Number(e.target.value);
    const artisan = artisans.find((a) => a.id_artisan === selectedId);
    setSelectedArtisan(artisan);
    setShowForm(!!artisan);
  };*/

  const artisanFiltre = Array.isArray(artisans)
    ? categorieSelection
      ? artisans.filter(
          (artisan) => artisan.id_categorie === Number(categorieSelection)
        )
      : artisans
    : [];

  const renderStars = (note) => {
    const maxStars = 5;
    const filledStars = Math.round(note);
    return [...Array(maxStars)].map((_, i) => (
      <span key={i} style={{ color: i < filledStars ? "gold" : "#ccc" }}>
        {i < filledStars ? "★" : "☆"}
      </span>
    ));
  };

  useEffect(() => {
    fetch("/categorie")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setCategories(data);
        else if (Array.isArray(data.categories)) setCategories(data.categories);
        else setCategories([]);
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
        if (Array.isArray(data)) setArtisans(data);
        else if (Array.isArray(data.artisans)) setArtisans(data.artisans);
        else setArtisans([]);
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
        if (Array.isArray(data)) setArtisanMois(data);
        else if (Array.isArray(data.artisans)) setArtisanMois(data.artisans);
        else setArtisanMois([]);
      })
      .catch((err) => {
        console.error("Erreur artisans du mois :", err);
        setArtisanMois([]);
      });
  }, []);



  return (
    <div className="container mt-5 Graphik-regular">
      <h1 className="text-center mb-4">Comment trouver mon artisan</h1>

      <div className="d-flex justify-content-center mb-4 gap-5 row">
        
          <div className="d-flex flex-column align-items-center col-12 col-md-5">
         
          <label htmlFor="categorie" className="form-label process text-center ">1. Choisir la catégorie d’artisanat dans le menu. </label>
          <select
            className="form-select mb-3"
            id="categorie"
            style={{ width: "300px" }}
            value={categorieSelection}
            onChange={(e) => setCategorieSelection(e.target.value)}
          >
            <option value="">-- Sélectionnez une catégorie --</option>
            {categories.map((cat) => (
              <option key={cat.id_categorie} value={cat.id_categorie}>
                {cat.nom}
              </option>
            ))}
          </select>
          

            </div>

<div className="d-flex flex-column align-items-center col-12 col-md-5">
         
          <label htmlFor="artisan" className="form-label process text-center">2 - Choisir un artisan</label>
          <select
            className="form-select mb-3"
            id="artisan"
            style={{ width: "300px" }}
            // value={selectedArtisan?.id_artisan || ""}
           /* onChange={handleArtisanChange}*/
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
        
          <div >
            <p className="text-center process">3. Le contacter via le formulaire de contact</p>
            
             </div>
          
        
      


  <div className="d-flex flex-column align-items-center mt-4">
    {/* <p className="text-center w-100 mb-3">
      Formulaire de contact pour <strong>{selectedArtisan?.nom_artisan}</strong>
    </p> */}
    <form
      className="d-flex flex-column gap-3"
      style={{ width: "100%", maxWidth: "600px" }}
    >
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Nom" required />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Prénom" required />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input type="tel" className="form-control" placeholder="Téléphone" required />
        </div>
        <div className="col">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
      </div>
      <div>
        <textarea
          className="form-control"
          placeholder="Votre message"
          style={{ height: "10rem" }}
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "8rem" }}
        >
          Envoyer
        </button>
        <h2 className="process " >4- Une réponse sera apportée sous 48h</h2>
      </div>
    </form>
  </div>


      <h3 className="text-center mt-5">Les 3 artisans du mois</h3>
      <div className="d-flex flex-wrap justify-content-center mt-3 gap-5">
        {artisanMois.slice(0, 3).map((artisan, idx) => (
          <div className="card" style={{ width: "18rem" }} key={artisan?.id_artisan || idx}>
            <div className="card-body text-center">
              <h5 className="card-title">{artisan?.nom || "Artisan du mois"}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {artisan?.specialite || "Spécialité"}
              </h6>
              <p className="card-text">
                Localisation : {artisan?.localisation || "Inconnue"}<br />
                Note : {artisan?.note ? renderStars(artisan.note) : "Non noté"}
              </p>
              <a href={`/artisan/${artisan?.id_artisan}`} className="card-link">
             
                Voir le profil
              </a>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;
