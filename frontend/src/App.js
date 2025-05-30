import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from './pages/accueil';
import Header from './composants/header/header';
import Footer from './composants/footer/footer';
import Categorie from './pages/categorie';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" replace />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/categorie/:id" element={<Categorie />} />
        
        {/* Autres routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
