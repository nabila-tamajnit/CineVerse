import { motion } from "framer-motion";

export const MovieCard = ({ title, image, description }) => {
  const fallbackImage = "https://via.placeholder.com";

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-bg-card border border-red-border/20 rounded-xl overflow-hidden flex flex-col h-full shadow-lg"
    >
      <img 
        src={image || fallbackImage} 
        alt={title} 
        className="w-full h-[400px] object-cover" 
        draggable="false"
      />

      {/* ========== BOX INFOS ========== */}
      <div className="p-4 flex flex-col flex-grow">
       
        <h3 className="text-text-title font-bold text-lg line-clamp-1 mb-2">
          {title}
        </h3>
        
        <p className="text-text-main text-sm line-clamp-3 mb-4 flex-grow italic">
          {description || "Aucun synopsis disponible pour ce titre."}
        </p>

        <div className="w-full py-2 bg-red-primary text-white text-center rounded font-semibold group-hover:bg-red-hover transition-colors mt-auto">
          Détails
        </div>
      </div>
    </motion.div>
  );
};
