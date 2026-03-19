import  { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté les cookies
    const consent = localStorage.getItem('appelle_moi_cookies');
    if (!consent) {
      // Affiche le bandeau après 2 secondes pour ne pas agresser l'utilisateur
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('appelle_moi_cookies', 'accepted');
    setIsVisible(false);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 z-[100] animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 p-6 relative overflow-hidden">
        {/* Décoration subtile */}
        <div className="absolute -top-6 -right-6 bg-brand-accent/10 w-20 h-20 rounded-full" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-brand-primary p-2 rounded-xl text-white">
              <Cookie size={20} />
            </div>
            <h4 className="font-black text-slate-800 uppercase tracking-tighter">Respect de la vie privée</h4>
            <button 
              onClick={closeBanner}
              className="ml-auto text-slate-400 hover:text-slate-600 transition"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
            Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic sur notre site à <span className="text-brand-primary font-bold">Nosy-Be</span>.
          </p>

          <div className="flex gap-3">
            <button 
              onClick={acceptCookies}
              className="flex-1 bg-brand-primary text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
            >
              <Check size={14} /> Accepter
            </button>
            <button 
              onClick={closeBanner}
              className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;                          