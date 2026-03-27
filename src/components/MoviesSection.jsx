import { MovieCard } from "./MovieCard";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "Un voyage spatial aux confins de l'univers.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman face au Joker dans Gotham City.",
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    description: "La quête épique pour détruire l'Anneau Unique.",
  },
  {
    id: 4,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    description: "Un voleur s'infiltre dans les rêves pour voler des secrets.",
  },
  {
    id: 5,
    title: "Harry Potter",
    image: "https://image.tmdb.org/t/p/original/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    description: "Un jeune orphelin découvre ses pouvoirs magiques et intègre l'école de Poudlard.",
  },
];

export const MoviesSection = () => {
  return (
    <section className="px-6 py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-title-text border-l-4 border-red-primary pl-3 mb-12">
          Films Incontournables
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
