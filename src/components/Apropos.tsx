import React from 'react';
import { CheckCircle2, MapPin, PlaneTakeoff, Navigation } from 'lucide-react';

const Apropos: React.FC = () => {
  const computerExpertImg = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80";

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-[#020617]">
      {/* --- SECTION NOTRE SAVOIR-FAIRE --- */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="relative">
          <img 
            src={computerExpertImg} 
            alt="Expert Maintenance Informatique" 
            className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover border-4 border-orange-500/20" 
          />
          <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-2xl hidden lg:block shadow-xl border-2 border-orange-400/30">
            <p className="text-3xl font-black">+5</p>
            <p className="font-bold uppercase text-[10px] tracking-widest opacity-90">Ans d'expérience</p>
          </div>
        </div>                                         
                                    
        <div className="space-y-6">
          <h2 className="text-orange-500 text-4xl font-serif font-bold leading-tight uppercase tracking-tight">
            Notre Savoir-Faire
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Chez <strong className="text-orange-400 font-bold">NAGY Consulting</strong>, notre expertise couvre  
            l'informatique de pointe comme les sites web statiques et dynamiques. Nous accompagnons les  
            entreprises sur des solutions digitales et logistiques, notamment l'installation, 
            la configuration et l'utilisation d'Odoo SH.
          </p>
          
          <div className="grid gap-4">
            {[
              "Site Web statique & site vitrine", 
              "Site web dynamique", 
              "site web avec WordPress",
              "Conception de solutions digitales", 
              "Expertise en Odoo SH", 
              "Administrateur Serveur VPS", 
              "Déploiement et Migration web"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 font-medium text-gray-200 group">
                <CheckCircle2 className="text-orange-500 group-hover:scale-110 transition-transform" size={22} />
                <span className="hover:text-orange-300 transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NOUVELLE SECTION : MOBILITÉ & INTERVENTION --- */}
      <div className="bg-gray-900/40 border border-orange-500/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Décoration en arrière-plan */}
        <div className="absolute top-0 right-0 p-12 opacity-5">
           <Navigation size={300} className="text-orange-500 rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
              <PlaneTakeoff size={18} className="text-orange-500" />
              <span className="text-orange-400 text-xs font-black uppercase tracking-widest">Mobilité Totale</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Prêt à intervenir à tout moment 
            </h3>
            
            <p className="text-gray-400 text-lg">
              Basé à <span className="text-white font-bold"> Nosy Be </span>Nagy Consulting : L'architecture de votre succès numérique au monde entier, nous codons votre futur votre solution digitale pensée ici, déployée partout.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 shadow-lg">
                <MapPin className="text-orange-500" size={20} />
                <span className="text-white font-bold">Nosy Be</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 shadow-lg">
                <MapPin className="text-orange-500" size={20} />
                <span className="text-white font-bold">ANTSIRANANA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 shadow-lg">
                <MapPin className="text-orange-500" size={20} />
                <span className="text-white font-bold">BOENY</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[300px] rounded-[2rem] overflow-hidden border-2 border-orange-500/20 shadow-2xl">
            {/* Intégration Google Maps centrée sur le Nord de Madagascar */}
            <iframe
              title="Madagascar Coverage"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.526550606!2d48.2718!3d-13.4026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f34070029be4955%3A0xee8057b737246982!2sSEIMAD%20Nosy%20Be!5e0!3m2!1sfr!2smg!4v1710770000000!5m2!1sfr!2smg"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.2) invert(0.9) hue-rotate(180deg)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;