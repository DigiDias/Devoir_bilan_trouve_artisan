import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './composants/header';
import Footer from './composants/footer';
import Accueil from './pages/accueil';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
    </Routes>
      <Footer />
               
    </Router>
  );
}

export default App;
