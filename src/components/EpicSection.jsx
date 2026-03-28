import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MovieCard } from "./MovieCard";

const epicList = [
  { id: 1399, title: "Game of Thrones", type: "tv" },
  { id: 94997, title: "House of the Dragon", type: "tv" },
  { id: 44217, title: "Vikings", type: "tv" }, 
];

export const EpicSection = ({ onCardClick }) => {
  const [enrichedEpic, setEnrichedEpic] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchEpic = async () => {
      try {
        const requests = epicList.map(item => 
          axios.get(`https://api.themoviedb.org/3/${item.type}/${item.id}?api_key=${API_KEY}&language=fr-FR`)
        );
        const responses = await Promise.all(requests);
        setEnrichedEpic(responses.map(res => res.data));
      } catch (error) {
        console.error("Erreur API Epic Section:", error);
      }
    };
    fetchEpic();
  }, [API_KEY]);

  return (
    <section className="px-6 py-24 bg-bg-main">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* ----- TITRES ----- */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-title border-l-8 border-red-primary pl-6 mb-6">
            Les Univers qui dépassent la fiction
          </h2>
          <p className="text-text-main text-lg max-w-2xl leading-relaxed font-light">
            Certains univers ne sont pas de simples histoires. Ils deviennent des
            mondes à part entière, avec leurs propres cultures, conflits et légendes.
          </p>
        </div>

        {/* ----- TEXTE ----- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24 bg-bg-card/50 p-8 rounded-2xl border border-red-border/10 shadow-2xl">

          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
            <img
              src="https://beam-images.warnermediacdn.com/2024-05/hlhui4espi.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com"
              alt="Univers épiques"
              className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-red-primary/20 text-red-primary text-sm font-bold uppercase tracking-widest">
              Légendes & Pouvoir
            </div>

            <p className="text-xl text-text-title font-medium leading-relaxed">
              Dragons, trônes, batailles et alliances. Ces récits nous rappellent
              que le pouvoir, l'honneur et la survie sont au cœur de toute grande
              histoire.
            </p>

            <blockquote className="border-l-2 border-red-primary/40 pl-4 py-2 bg-white/5 rounded-r-lg">
              <p className="text-text-main italic text-lg leading-snug">
                « Nous ne sommes pas les maîtres du destin, nous ne sommes que les gardiens de l'héritage. »
              </p>
              <footer className="text-red-primary font-semibold mt-2">— Rhaenyra Targaryen</footer>
            </blockquote>
          </div>

        </div>

        {/* ----- CARTES ÉPIQUES ----- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {enrichedEpic.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => onCardClick(item)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="cursor-pointer"
            >
              <MovieCard 
                title={item.name || item.title}
                image={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                description={item.overview}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
