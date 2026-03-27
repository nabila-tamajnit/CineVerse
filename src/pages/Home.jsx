import { Hero } from "../components/Hero";
import { MoviesSection } from "../components/MoviesSection";
import { SeriesSection } from "../components/SeriesSection";
import { EpicSection } from "../components/EpicSection";

export const Home = () => {
  return (
    <main className="bg-bg-main min-h-screen text-white">
      <Hero />
      <MoviesSection />
      <SeriesSection />
      <EpicSection />
    </main>
  );
};