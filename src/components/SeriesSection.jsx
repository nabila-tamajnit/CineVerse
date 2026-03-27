import { MovieCard } from "./MovieCard";

const series = [
  {
    id: 1,
    title: "Game of Thrones",
    image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    description: "La lutte épique pour le Trône de Fer dans le royaume de Westeros.",
  },
  {
    id: 2,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    description: "La transformation radicale d'un professeur de chimie en baron de la drogue.",
  },
  {
    id: 3,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    description: "Une bande d'amis affronte des forces surnaturelles dans les années 80.",
  },
  {
    id: 4,
    title: "The Last of Us",
    image: "https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    description: "Un survivant endurci escorte une jeune fille à travers une Amérique dévastée.",
  },
  {
    id: 5,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/jlbrV1Kl4Y8pWXu12SppebRs7On.jpg",
    description: "Des personnes endettées participent à des jeux d'enfants mortels pour une grosse somme d'argent.",
  },
];

export const SeriesSection = () => {
  return (
    <section className="px-6 py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-text-title border-l-4 border-red-primary pl-4 mb-12">
          Séries Légendaires
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {series.map((serie) => (
            <MovieCard
              key={serie.id}
              {...serie}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
