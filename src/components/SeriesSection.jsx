import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MovieCard } from "./MovieCard";

const seriesList = [
  { id: 1399, title: "Game of Thrones", type: "tv" },
  { id: 1396, title: "Breaking Bad", type: "tv" },
  { id: 66732, title: "Stranger Things", type: "tv" },
  { id: 100088, title: "The Last of Us", type: "tv" },
  { id: 93405, title: "Squid Game", type: "tv" },
];

export const SeriesSection = ({ onCardClick }) => {
  const [enrichedSeries, setEnrichedSeries] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const requests = seriesList.map(serie => 
          axios.get(`https://api.themoviedb.org/3/${serie.type}/${serie.id}?api_key=${API_KEY}&language=fr-FR`)
        );
        const responses = await Promise.all(requests);
        setEnrichedSeries(responses.map(res => res.data));
      } catch (error) {
        console.error("Erreur API Home Series:", error);
      }
    };
    fetchSeries();
  }, [API_KEY]);

  return (
    <section className="px-6 py-24 bg-bg-main">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-text-title border-l-4 border-red-primary pl-4 mb-12 uppercase tracking-tight">
          Séries Légendaires
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {enrichedSeries.map((serie, index) => (
            <motion.div
              key={serie.id}
              onClick={() => onCardClick(serie)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              className="cursor-pointer"
            >
              <MovieCard 
                title={serie.name}
                image={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                description={serie.overview}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
