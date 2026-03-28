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
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

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
      }
    };
    fetchMovies();
  }, [API_KEY]);

  return (
    <section id="movies-section" className="px-6 py-24 bg-bg-main">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-text-title border-l-4 border-red-primary pl-3 mb-12 uppercase tracking-tight">
          Films Incontournables
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {enrichedMovies.map((movie, index) => (
            <motion.div
              key={movie.id}
              onClick={() => onCardClick(movie)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              className="cursor-pointer"
            >
              <MovieCard 
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                description={movie.overview}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
