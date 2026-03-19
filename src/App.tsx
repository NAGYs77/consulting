import React from 'react'; // Optionnel avec les versions récentes, mais conseillé
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Apropos from './components/Apropos';
import CookieConsent from './components/CookieConsent';
// Utilisation du type React.FC (Functional Component) pour plus de clarté en TS
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16"> {/* Exemple : padding-top si votre Navbar est fixed */}
        <Routes>
          {/* Accueil */}
          <Route path="/" element={<Home />} />

          {/* Autres composants */}
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<Apropos />} />

          {/* Redirection si URL inconnue (404) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <CookieConsent />
      </main>
                        
   
    </>                                                             
  );
}

export default App;