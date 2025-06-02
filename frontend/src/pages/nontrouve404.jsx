import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/img/pasimage.png'; 
import '../App.css'; 

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 Graphik-regular">
      <img src={notFoundImg} alt="Page non trouvée" className="w-96 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Page non trouvée</h1>
      <p className="text-lg text-gray-600 mb-4">La page que vous recherchez n'existe pas ou est en cours de contruction.</p>
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFound404;
