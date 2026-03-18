import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Assure-toi d'avoir installé framer-motion
import { Send, CheckCircle2, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import moi from "../assets/moi.jpeg";
import nel from "../assets/nel.jpg";

const STATIC_FORMS_KEY = "sf_89f4dc80039a6b48bfeece57";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      accessKey: STATIC_FORMS_KEY,
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: "Nouvelle demande - Portfolio Nagy",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else { setStatus("error"); }
    } catch (error) { setStatus("error"); }
  };

  return (
    <section id="contact" className="py-12 px-4 bg-[#020617] min-h-screen flex flex-col items-center">
      
      {/* --- NOUVELLE SECTION ANIMÉE EN HAUT --- */}
      <div className="w-full max-w-5xl flex justify-between items-start mb-16 px-4 md:px-10 overflow-hidden">
        
        {/* Rond 1 : Vient de la gauche vers la droite */}
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-emerald-500 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-[#0f172a]">
               <img
              src={nel} 
              alt="Nagy Sallah" 
              className="w-full h-full object-cover"
            /> 
          </div>
          <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-widest text-center">
            Nelson Hakchi de MakoaDigitale <br />wordPress ,videaste,photographe ,publisitaire,couverture evennementielle
          </p>
        </motion.div>

        {/* Rond 2 : Vient de la droite vers la gauche (Avec ta photo) */}
        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-emerald-500 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-[#0f172a]">
            <img 
              src={moi} 
              alt="Nagy Sallah" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-widest text-center">
            Nagy Sallah Hassad <br /> Developpeur Fullstack ,Administrateur serveur vps,Developpeur Odoo
          </p>
        </motion.div>
      </div>
      {/* --- FIN DE LA SECTION ANIMÉE --- */}

      <div className="max-w-5xl w-full bg-[#0f172a] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-5 border border-white/5">
        
        {/* FORMULAIRE */}
        <div className="md:col-span-3 p-6 md:p-10 bg-[#111827]">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Parlons de votre projet.</h2>
          <p className="text-gray-400 mb-8 text-base">Échangez avec un expert basé à Nosy-be avec une reponse concrètes en 24h.</p>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <CheckCircle2 size={40} className="text-emerald-500 animate-pulse" />
              <h3 className="text-lg font-bold text-white uppercase">Message Envoyé !</h3>
              <p className="text-gray-400 text-center px-4 text-xs">Merci ! Je reviendrai vers vous très rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="name" type="text" placeholder="Nom complet" required className="w-full px-5 py-3 rounded-xl bg-[#1f2937] border border-transparent text-white text-sm outline-none focus:border-emerald-500 transition-all placeholder:text-gray-600" />
                <input name="phone" type="tel" placeholder="Téléphone / WhatsApp" required className="w-full px-5 py-3 rounded-xl bg-[#1f2937] border border-transparent text-white text-sm outline-none focus:border-emerald-500 transition-all placeholder:text-gray-600" />
              </div>
              <input name="email" type="email" placeholder="Email" required className="w-full px-5 py-3 rounded-xl bg-[#1f2937] border border-transparent text-white text-sm outline-none focus:border-emerald-500 transition-all placeholder:text-gray-600" />
              <textarea name="message" placeholder="Votre projet..." rows={3} required className="w-full px-5 py-3 rounded-xl bg-[#1f2937] border border-transparent text-white text-sm outline-none focus:border-emerald-500 transition-all resize-none placeholder:text-gray-600"></textarea>

              <button type="submit" disabled={status === "sending"} className="w-full bg-emerald-500 hover:bg-emerald-600 text-[#0f172a] py-3.5 rounded-xl font-extrabold flex justify-center items-center gap-2 transition-all uppercase tracking-widest mt-3 text-xs">
                {status === "sending" ? <div className="w-5 h-5 border-4 border-[#0f172a] border-t-transparent rounded-full animate-spin"></div> : <>ENVOYER MA DEMANDE <Send size={16} /></>}
              </button>
            </form>
          )}
        </div>

        {/* INFOS DROITE */}
        <div className="md:col-span-2 p-6 md:p-10 bg-[#0f172a] border-l border-white/5 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-bold uppercase mb-4 border border-emerald-500/20">Conseiller disponible</span>
            <h3 className="text-2xl font-bold text-white mb-0.5">Nagy Sallah</h3>
            <p className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-8">votre solution digital</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-[#0f172a] transition-all flex-shrink-0"><Phone size={18} /></div>
                <div><p className="text-[9px] text-gray-500 uppercase font-bold">WhatsApp / Tel</p><p className="text-white font-medium text-base">+261 32 66 115 22</p></div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-[#0f172a] transition-all flex-shrink-0"><Mail size={18} /></div>
                <div><p className="text-[9px] text-gray-500 uppercase font-bold">Email Pro</p><p className="text-white font-medium text-xs sm:text-base">hassadsallah@gmail.com</p></div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-3">
            <div className="flex gap-2.5">
              <a href="https://facebook.com/ackleise.jhonny" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"><Facebook size={16} /></a>
              <a href="https://instagram.com/nagysallah" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform"><Instagram size={16} /></a>
              <a href="https://linkedin.com/in/nagy-sallah" className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;