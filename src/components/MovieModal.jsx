import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Calendar, Clock, Loader2 } from "lucide-react";

export const MovieModal = ({ movie, onClose }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        const getDetails = async () => {
            setLoading(true);
            try {
                let type = "movie";
                if (movie.name || movie.first_air_date || movie.type === "tv" || movie.media_type === "tv") {
                    type = "tv";
                }
                const res = await axios.get(
                    `https://api.themoviedb.org/3/${type}/${movie.id}?api_key=${API_KEY}&language=fr-FR`
                );
                setData(res.data);
            } catch (err) {
                console.error("Erreur détails:", err);
            } finally {
                setLoading(false);
            }
        };
        if (movie) getDetails();
    }, [movie, API_KEY]);

    if (!movie) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                />

                {/* ========== BOX DESCRIPTION ========== */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                    className="relative bg-zinc-900 border border-zinc-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row"
                >
                    {loading ? (
                        <div className="w-full h-80 flex items-center justify-center text-red-500">
                            <Loader2 className="animate-spin" size={40} />
                        </div>

                    ) : !data ? (
                        <div className="w-full h-80 flex items-center justify-center text-gray-400">
                            <p>Impossible de charger les détails.</p>
                        </div>

                    ) : (
                        <>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-red-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* ----- POSTER ----- */}
                            <div className="w-full md:w-2/5 flex-shrink-0">
                                <img
                                    src={
                                        data.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                                            : "https://placehold.co/500x750?text=No+Image"
                                    }
                                    alt={data.title || data.name}
                                    className="w-full h-full object-cover min-h-[400px] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                                />
                            </div>

                            {/* ----- INFOS ----- */}
                            <div className="p-8 md:w-3/5 space-y-6">
                                <h2 className="text-3xl font-bold text-white">
                                    {data.title || data.name}
                                </h2>

                                <div className="flex flex-wrap gap-4 text-sm font-medium">
                                    <span className="flex items-center gap-1 text-yellow-500">
                                        <Star size={16} fill="currentColor" />
                                        {data.vote_average?.toFixed(1)}
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-400">
                                        <Calendar size={16} />
                                        {data.release_date || data.first_air_date}
                                    </span>
                                    {data.runtime && (
                                        <span className="flex items-center gap-1 text-gray-400">
                                            <Clock size={16} />
                                            {data.runtime} min
                                        </span>
                                    )}
                                </div>

                                {/* ----- GENRES ----- */}
                                {data.genres && (
                                    <div className="flex flex-wrap gap-2">
                                        {data.genres.map((g) => (
                                            <span
                                                key={g.id}
                                                className="bg-red-600/20 text-red-400 border border-red-600/30 px-3 py-1 rounded-full text-xs"
                                            >
                                                {g.name}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <p className="text-gray-300 leading-relaxed">
                                    {data.overview || "Aucun synopsis disponible."}
                                </p>

                                {/* ----- LOGO TMDB ----- */}
                                <div className="pt-6 border-t border-zinc-700 flex items-center gap-4">
                                    <img
                                        src="/assets/tmdb-logo.svg"
                                        alt="TMDB Logo"
                                        className="w-16"
                                    />
                                    <p className="text-xs text-gray-600 uppercase leading-tight">
                                        This product uses the TMDB API but is not endorsed or certified by TMDB.
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};