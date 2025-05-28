import React, { useState } from 'react';
import Logo  from '../assets/img/Logo.png'

const palette = {
  headerBg: '#0074c7',    // Bleu
  text: 'white',

};

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: palette.headerBg }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/Accueil">
        <img src={Logo} alt="Logo" width="200" height="200" className="d-inline-block align-text-top me-2">
        </img>
        </a>

        {/* Bouton burger */}
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

        {/* Menu et recherche */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="/batiment">Bâtiment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/fabrication">Fabrication</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/alimentation">Alimentation</a>
            </li>
          </ul>

          {/* Barre de recherche */}
          <form className="d-flex justify-content-center justify-content-lg-end w-100 mt-3 mt-lg-0" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              placeholder="Rechercher un artisan..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ maxWidth: '250px' }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
