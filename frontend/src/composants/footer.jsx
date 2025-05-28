import React from 'react';

const palette = {
  headerBg: '#0074c7',    // Bleu
  text: 'white',
  hoverBg: '#82b864',     // Vert
};

export default function Footer() {
  return (
    <footer
      className="mt-5 py-4"
      style={{ backgroundColor: palette.headerBg, color: palette.text }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Menu pages légales */}
        <nav>
          <ul className="list-unstyled d-flex flex-column flex-md-row mb-3 mb-md-0">
            {[
              { label: 'Mentions légales', href: '/mentions-legales' },
              { label: 'Données personnelles', href: '/donnees-personnelles' },
              { label: 'Accessibilité', href: '/accessibilite' },
              { label: 'Cookies', href: '/cookies' },
            ].map(({ label, href }) => (
              <li key={href} className="me-md-4 mb-2 mb-md-0">
                <a
                  href={href}
                  className="text-white text-decoration-none"
                  style={{ transition: 'background-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = palette.hoverBg}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Adresse et contact */}
        <address className="text-white mb-0 text-center text-md-end" style={{fontStyle: 'normal'}}>
          101 cours Charlemagne<br />
          CS 20033<br />
          69269 LYON CEDEX 02<br />
          France<br />
          <a href="tel:+33426734000" className="text-white text-decoration-none">
            +33 (0)4 26 73 40 00
          </a>
        </address>
      </div>
    </footer>
  );
}
