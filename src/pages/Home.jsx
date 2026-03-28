import { Hero } from "../components/Hero";
import { MoviesSection } from "../components/MoviesSection";
import { SeriesSection } from "../components/SeriesSection";
import { EpicSection } from "../components/EpicSection";
import { LifeStyleSection } from "../components/LifeStyleSection";
import { useState } from "react";
import { MovieModal } from "../components/MovieModal";

export const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <main>
      <Hero />
      
      <MoviesSection onCardClick={(movie) => setSelectedMovie(movie)} />
      <SeriesSection onCardClick={(serie) => setSelectedMovie(serie)} />
      
      <EpicSection onCardClick={(item) => setSelectedMovie(item)} />
      <LifeStyleSection />

      {/* Modale si un film est sélectionné */}
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </main>
  );
};
