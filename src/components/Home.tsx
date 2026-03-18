import cre from "../assets/cre.png";

const Home = () => {
  return (
    
    <div className="flex flex-col items-center text-slate-200 px-4 py-10">
      
      {/* Ton bloc de présentation */}
      <div className="w-full max-w-6xl h-[500px] rounded-[30px] shadow-2xl overflow-hidden relative mt-10 border border-white/5"> 
       
        {/* Le dégradé violet profond */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-[#0f172a]"></div>

        {/* Forme géométrique décorative */}
        <div
          className="absolute left-0 top-0 h-full w-[40%] bg-purple-600/20"
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" }}
        ></div>

        <div className="relative z-10 p-10 flex flex-col md:flex-row h-full items-center">
          {/* Texte */}
          <div className="flex-1 text-white">
            <h2 className="text-4xl font-bold mb-4">NAGY Consulting</h2>
            <p className="text-lg opacity-80 max-w-md">
              Bienvenue sur notre site web . Expert en solutions digitales.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Petit cercle décoratif derrière l'image */}
              <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>
              <img
                src={cre}         
                alt="moi"
                className="relative object-cover w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;