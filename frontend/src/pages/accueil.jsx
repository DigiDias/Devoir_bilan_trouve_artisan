import React, { useEffect, useState } from "react";

const Accueil = () => {
  const [categories, setCategories] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [categorieSelection, setCategorieSelection] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedArtisan, setSelectedArtisan] = useState("");

  const handleArtisanChange = (e) => {
    const value = e.target.value;
    setSelectedArtisan(value);
    setShowForm(value !== ""); // affiche le formulaire si un artisan est sélectionné
  };

  const artisanFiltre =
    Array.isArray(artisans) && categorieSelection
      ? artisans.filter(
          (artisan) => artisan.id_categorie === Number(categorieSelection)
        )
      : Array.isArray(artisans)
      ? artisans
      : [];

  useEffect(() => {
    fetch("/categorie")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Erreur catégories :", err));
  }, []);

  useEffect(() => {
    fetch("/artisans")
      .then((res) => res.json())
      .then((data) => {
        setArtisans(data);
        console.log("Artisans reçus :", data);
      })
      .catch((err) => console.error("Erreur artisans :", err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Comment trouver mon artisan</h1>

      <div className="d-flex ">
      <div className="d-flex flex-column">
      <div className="d-flex flex-column">
        <p>1 - Choisir la catégorie d’artisanat dans le menu.</p>

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
          {categories.map((cat) => (
            <option key={cat.id_categorie} value={cat.id_categorie}>
              {cat.nom}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex flex-column">
        <p>2 - Choisir un artisan.</p>

        <label htmlFor="artisan" className="form-label">
          Liste des artisans
        </label>
        <select
          className="mb-3"
          id="artisan"
          style={{ width: "300px" }}
          value={selectedArtisan}
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
        <form className="d-flex flex-column" >
          <label htmlFor="nom" className="form-label">nom</label>
          <input type="text" placeholder="Nom" name="nom" />
            <label htmlFor="prenom" className="form-label">prenom</label>
          <input type="text" placeholder="Prénom" name="prenom" />
          <button type="submit">Envoyer</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default Accueil;
