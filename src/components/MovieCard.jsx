import { motion } from "framer-motion";

export const MovieCard = ({ title, image, description }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-bg-card border border-red-border/10 rounded-xl overflow-hidden flex flex-row md:flex-col h-[180px] md:h-full shadow-lg"
    >
      {/* ----- IMAGE ----- */}
      <div className="w-1/3 md:w-full h-full md:h-[400px] flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
          draggable="false"
        />
      </div>

      {/* ----- CONTENU ----- */}
      <div className="w-2/3 md:w-full p-3 md:p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-text-title font-bold text-base md:text-lg line-clamp-1 mb-1">
            {title}
          </h3>
          
          <p className="text-text-main text-xs md:text-sm line-clamp-3 md:line-clamp-3 italic leading-relaxed">
            {description || "Aucun synopsis disponible."}
          </p>
        </div>
        
        <button className="w-full py-1.5 md:py-2 bg-red-primary/80 hover:bg-red-hover/80 text-white text-center rounded text-xs md:text-sm font-semibold mt-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-color-primary/20 cursor-pointer">
          Détails
        </button>
      </div>
    </motion.div>
  );
};
