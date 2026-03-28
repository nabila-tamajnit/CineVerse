import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Search as SearchIcon, Loader2, X } from "lucide-react";
import { MovieCard } from "../components/MovieCard";
import { MovieModal } from "../components/MovieModal";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const searchMovies = async () => {
      if (query.length < 2) { 
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=fr-FR&query=${query}&page=1&include_adult=false`
        );
        setResults(response.data.results || []);
      } catch (error) {
        console.error("Erreur TMDB:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(searchMovies, 500);
    return () => clearTimeout(timer);
  }, [query, API_KEY]);

  return (
    <div className="bg-bg-main min-h-screen">

      {/* ========== HERO ========== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-[80%] lg:bg-center"
                    style={{ backgroundImage: "url('https://photos.tf1.fr/640/360/cover-hp-iptv-en-ce-moment-la-momie-73b052-f63e69-0@3x.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/20 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-title tracking-tighter mb-4">
            Explorer le <span className="text-red-primary italic">CineVerse</span>
          </h1>
          <p className="text-text-main text-lg font-light max-w-xl mx-auto italic">
            "Trouvez votre prochain coup de cœur parmi des milliers d'histoires."
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl h-screen mx-auto px-6 mt-10 relative z-20">

        {/* ----- BARRE DE RECHERCHE ----- */}
        <div className="max-w-2xl mx-auto mb-20 relative group">
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-text-main group-focus-within:text-red-primary transition-colors" size={20} />
          <input
            type="text"
            placeholder="Rechercher un film ou une série..."
            className="w-full bg-bg-card border border-red-border/30 rounded-full py-5 pl-14 pr-12 text-text-title focus:border-red-primary outline-none transition-all shadow-2xl shadow-red-primary/10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-text-main hover:text-red-primary"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* ----- CHARGEMENT ----- */}
        {isLoading && (
          <div className="flex justify-center mt-10">
            <Loader2 className="animate-spin text-red-primary" size={40} />
          </div>
        )}

        {/* ----- GRILLE FILMS ----- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {results.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div onClick={() => setSelectedMovie(item)}>
                <MovieCard
                  title={item.title || item.name}
                  image={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "https://placehold.co/500x750?text=No+Image"}
                  description={item.overview}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
};