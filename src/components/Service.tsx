import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Layout, 
  ServerCog, 
  ArrowRight, 
  Settings2 
} from 'lucide-react';

const services = [
  {
    title: "Développement Web",
    description: "Conception de sites vitrines statiques ultra-rapides et d'applications web dynamiques complexes.",
    icon: Layout,
    features: ["React / Next.js", "WordPress","Tailwind CSS", "SEO Optimisé"]
  },
  {
    title: "Logiciels Sur Mesure",
    description: "Création de solutions logicielles métiers pour automatiser vos processus internes.",
    icon: Code2,
    features: ["Java / Spring Boot", "Architecture Microservices", "API REST"]
  },
  {
    title: "Solutions Odoo",
    description: "Expertise complète sur Odoo SH : installation, configuration de modules et gestion ERP.",
    icon: Settings2,
    features: ["Odoo 17+", "Custom Modules", "Gestion Logistique"]
  },
  {
    title: "Infrastructure & serveur VPS",
    description: "Migration de Site Web, gestion de VPS et déploiement sécurisé de vos applications.",
    icon: ServerCog,
    features: ["Migration Site Web", "Admin Système Linux", "Sécurité & SSL"]
  }
];

const Service: React.FC = () => {
  return (
    <section className="py-20 bg-[#020617] px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Nos Services Tech
          </h2>
          <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Des solutions numériques de pointe pour transformer votre vision en réalité technologique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-orange-500/10 p-8 rounded-3xl hover:border-orange-500/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="bg-orange-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <service.icon className="text-orange-500 group-hover:text-white w-8 h-8" />
                </div>

                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed italic">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1 h-1 bg-orange-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                >
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-800 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-orange-900/20">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-white text-2xl font-bold">Un projet spécifique en tête ?</h4>
            <p className="text-orange-100 opacity-80">Construisons ensemble votre prochaine solution digitale.</p>
          </div>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-white text-orange-700 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg active:scale-95 inline-block"
          >
            Démarrer un projet
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Service;