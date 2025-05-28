import React from "react";

const Accueil = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Comment trouver mon artisan</h1>
      <p className="text-center">
        Explorez nos services et découvrez comment nous pouvons vous aider.
      </p>
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h2>Bâtiment</h2>
          <p>Découvrez nos solutions de construction durables.</p>
          <a href="/batiment" className="btn btn-primary">En savoir plus</a>
        </div>
        <div className="col-md-4 text-center">
          <h2>Services</h2>
          <p>Explorez nos services personnalisés pour vos besoins.</p>
          <a href="/services" className="btn btn-primary">En savoir plus</a>
        </div>
        <div className="col-md-4 text-center">
          <h2>Fabrication</h2>
          <p>Découvrez notre expertise en fabrication industrielle.</p>
          <a href="/fabrication" className="btn btn-primary">En savoir plus</a>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
