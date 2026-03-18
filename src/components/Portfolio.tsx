import React, { useState } from "react";
import SplitText from "../components/SplitText";
import { Github, ChevronRight, ChevronLeft, Scroll, ExternalLink } from "lucide-react";

// 1. Définition de l'interface TypeScript
interface ProjectData {
  id: number;
  title: string;
  description: string;
  technos: string[];
  githubUrl?: string;
  Url?: string; 
}

// 2.  données de projets
const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Entreprise Appelez-Moi",
    description: "Prestataire de service de plomberie , d'informatique , d'éléctrique  une entreprise qui vous aides sur tout le plan de votre projet",
    technos: ["React JS", "TailwindCSS"],
    Url: "https://appelez-moi.mg", 
  },

    {
    id: 2,
    title: "Romaric Masova Tour",
    description: "site web touristique à nosy-be ",
    technos: ["WordPress/ Elementor/ Kadence",],
    Url: "https://romaricmasovatour.com",
  }, 
  
  
     {
    id: 3,
    title: "Nosy-be Beautifull-Travel",
    description: "site web Touristique à nosy-be ",
    technos: ["WordPress/ Elementor / Kadence",],
    Url: "https://nosybeautiful-travel.com",
  }, 

     {
    id: 4,
    title: "Nosy-be Travel Tour",
    description: "site web  Travel Tour ",
    technos: ["wordPress / Elementor / Kadence",],
    Url: "https://nosy-betraveltour.com",
  }, 

     {
    id: 5,
    title: "Madagascar Tour Severino ",
    description: "site web Touristique à nosy-be et Madagascar ",
    technos: ["WordPress / Elementor / Kadence",],
    Url: "https://madagascartourseverino.com",
  }, 

     {
    id: 6,
    title: "Nosy-be Cosimo Tour",
    description: "site web  de Cosmo Tour ",
    technos: ["WordPress / Elementor/ Kadence",],
    Url: "https://nosy-becosimotours.com",
  }, 

  
  {
    id: 7,
    title: "Application de logement",
    description: "Un site personnel permettant de trouver un logement au bon prix. Comprend un système de recherche et de filtres.",
    technos: ["React JS", "TailwindCSS", "Express JS"],
    githubUrl: "https://github.com/NAGYs77/app_logement.git",
  },
  {
    id: 8,
    title: "Module Odoo Personnalisé",
    description: "Développement d'un module spécifique pour la gestion et le suivi des livraisons pour l'entreprise  Meuble110 à Mayotte.",
    technos: ["Python", "Odoo ERP", "PostgreSQL"],
     githubUrl: "https://github.com/NAGYs77/lvr-odoo.git",
  },

    {
    id: 9,
    title: "Ylang-Ylang en cour...",
    description: "application web pour les recherche effectuer et Publier par des Dr ,Pr insitut , Université ,ect...",
    technos: ["React", "TailwindCSS", "PostgreSQL"  , "java/Spring-Boot"],
     githubUrl: "https://github.com/NAGYs77/biodiversity.git",
  },

                                                                             
];

const Portfolio: React.FC = () => {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center p-4 md:p-8">
      
      {/* HEADER */}
      <div className="w-full max-w-4xl flex flex-col items-center mb-12 text-center">
        <Scroll className="w-12 h-12 text-amber-500 mb-2 opacity-80" />
        <SplitText
          text="Mes Archives"
          className="text-4xl md:text-5xl font-serif font-bold text-amber-100"
        />
        <p className="text-gray-400 mt-2 italic text-sm">Cliquez sur un parchemin pour l'ouvrir.</p>
      </div>

      {/* LISTE DES PROJETS */}
      <div className="w-full max-w-12xl space-y-20 flex flex-col items-center">
        {projectsData.map((project) => {
          const isOpen = openProjectId === project.id;

          return (
            <div key={project.id} className="flex items-center justify-center w-full">
              
              <div 
                className="relative flex items-center cursor-pointer group"
                onClick={() => setOpenProjectId(isOpen ? null : project.id)}
              >
                {/* ROULEAU GAUCHE */}
                <div className="z-30 w-7 h-40 bg-gradient-to-r from-[#8b6b43] via-[#d2b48c] to-[#8b6b43] 
                             rounded-full border-2 border-[#5d462a] shadow-xl flex items-center justify-center shrink-0">
                  {!isOpen && <ChevronRight className="text-[#4a3721] w-4 h-4 animate-pulse" />}
                </div>

                {/* ZONE DE DÉPLOIEMENT */}
                <div className={`scroll-horizontal-container ${isOpen ? 'open' : ''}`}>
                  <div className="scroll-content-clip h-32 bg-[#f3e5ab] relative flex items-center shadow-inner">
                    
                    {/* Ombres internes */}
                    <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

                    {/* CONTENU TEXTUEL */}
                    <div className="px-10 py-2 min-w-[280px] md:min-w-[400px] text-[#4a3721] font-serif overflow-hidden">
                      <h3 className="text-lg font-bold border-b border-[#4a3721]/30 pb-1 truncate uppercase">
                        {project.title}
                      </h3>
                      <p className="text-[15px] leading-tight italic mt-2 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Technos */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.technos.map(tech => (
                          <span key={tech} className="text-[8px] px-1.5 py-0.5 border border-[#4a3721]/40 rounded font-bold uppercase bg-[#d2b48c]/30">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* LIENS : GITHUB ET/OU SITE WEB */}
                      <div className="mt-3 flex gap-4">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold underline flex items-center gap-1 hover:text-black transition-colors"
                            onClick={(e) => e.stopPropagation()} // Évite de fermer le parchemin au clic
                          >
                            <Github size={12} /> GitHub
                          </a>
                        )}

                        {project.Url && (
                          <a 
                            href={project.Url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold underline flex items-center gap-1 hover:text-black transition-colors"
                            onClick={(e) => e.stopPropagation()} // Évite de fermer le parchemin au clic
                          >
                            <ExternalLink size={12} /> Voir le site
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                </div>

                {/* ROULEAU DROIT */}
                <div className="z-30 w-7 h-40 bg-gradient-to-r from-[#8b6b43] via-[#d2b48c] to-[#8b6b43] 
                             rounded-full border-2 border-[#5d462a] shadow-xl flex items-center justify-center shrink-0">
                  {!isOpen && <ChevronLeft className="text-[#4a3721] w-4 h-4 animate-pulse" />}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;