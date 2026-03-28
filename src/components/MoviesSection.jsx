import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MovieCard } from "./MovieCard";

const moviesList = [
  { id: 157336, title: "Interstellar", type: "movie" },
  { id: 155, title: "The Dark Knight", type: "movie" },
  { id: 120, title: "The Lord of the Rings", type: "movie" },
  { id: 27205, title: "Inception", type: "movie" },
  { id: 671, title: "Harry Potter", type: "movie" },
];

export const MoviesSection = ({ onCardClick }) => {
  const [enrichedMovies, setEnrichedMovies] = useState([]);
  const [loading, setLoading] = useState(true); // État de chargement
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // Détection Mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const requests = moviesList.map(movie => 
          axios.get(`https://api.themoviedb.org/3/${movie.type}/${movie.id}?api_key=${API_KEY}&language=fr-FR`)
        );
        const responses = await Promise.all(requests);
        setEnrichedMovies(responses.map(res => res.data));
      } catch (error) {
        console.error("Erreur API Home:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [API_KEY]);

  return (
    <section id="movies-section" className="px-6 py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto">
        {/* ----- Titre ----- */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text-title border-l-4 border-red-primary pl-3 mb-12 uppercase tracking-tight"
        >
          Films Incontournables
        </motion.h2>

        {/* ----- Card ----- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {loading ? (
            /* AFFICHAGE */
            [...Array(5)].map((_, i) => (
              <div key={i} className="bg-bg-card/50 rounded-xl h-[500px] animate-pulse border border-red-border/10" />
            ))
          ) : (
            /* AFFICHAGE RÉEL */
            enrichedMovies.map((movie, index) => (
              <motion.div
                key={movie.id}
                onClick={() => onCardClick(movie)}
                // Sur mobile
                initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0 : index * 0.1 }}
                whileHover={!isMobile ? { y: -10 } : {}}
                className="cursor-pointer"
              >
                <MovieCard 
                  title={movie.title}
                  image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  description={movie.overview}
                />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
