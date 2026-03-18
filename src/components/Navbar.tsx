import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-md space-y-4 md:space-y-0">
      <div className="text-xl font-bold tracking-tight text-sky-400">
        NAGY CONSULTING
      </div>
      
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-sky-400 transition-colors">Accueil</Link>
        </li>

         <li>
          <Link to="/apropos" className="hover:text-sky-400 transition-colors">Apropos</Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-sky-400 transition-colors">Portfolio</Link>
        </li>

        <li>
          <Link to="/service" className="hover:text-sky-400 transition-colors">Service</Link>
        </li>

        <li>
          <Link to="/contact" className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition shadow-md active:scale-95">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;