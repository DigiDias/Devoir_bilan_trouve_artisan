import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import '../../composants/header/header.css';

const palette = {
  headerBg: '#0074c7',
  text: 'white',
};

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]); // ✅ State pour stocker les catégories
  const navigate = useNavigate();

  // 🔍 Gérer la recherche à chaque saisie
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  // ✅ Appel API catégories une seule fois au chargement
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/Categorie');
        if (!res.ok) throw new Error("Erreur lors du chargement des catégories");
        const data = await res.json();
        setCategories(data); // ← on stocke les catégories dans le state
      } catch (err) {
        console.error("Erreur API catégories :", err);
      }
    };

    fetchCategories();
  }, []);

  // 🔁 Gestion de la touche Entrée pour recherche artisan
  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      try {
        const response = await fetch(`/listeArtisan?nom=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        if (data && data.length > 0) {
          const artisan = data[0];
          navigate(`/listeArtisan/${artisan.id_artisan}`);
        } else {
          alert("Aucun artisan trouvé.");
        }
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark Graphik-bold" style={{ backgroundColor: palette.headerBg }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/Accueil">
          <img src={Logo} alt="Logo" width="200" height="200" className="d-inline-block align-text-top me-2" />
        </a>

        <button
          className="navbar-toggler d-lg-none d-flex justify-content-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2 mt-lg-0">
            {categories.map((cat) =>
              cat.nom ? (
                <li className="nav-item" key={cat.id_categorie}>
                  <a className="nav-link text-white" href={`/categorie/${cat.id_categorie}`}>
                    {cat.nom}
                  </a>
                </li>
              ) : null
            )}
          </ul>

          <form className="d-flex justify-content-center justify-content-lg-end w-100 mt-3 mt-lg-0" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              placeholder="Rechercher un artisan..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              style={{ maxWidth: '250px' }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
