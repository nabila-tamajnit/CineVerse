import { MovieCard } from "./MovieCard";

const epicUniverses = [
  {
    id: 1,
    title: "Game of Thrones",
    image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    description: "Le trône de fer ne pardonne pas.",
  },
  {
    id: 2,
    title: "House of the Dragon",
    image: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    description: "La guerre civile des Targaryen.",
  },
{
    id: 3,
    title: "Vikings",
    image: "https://image.tmdb.org/t/p/original/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg",
    description: "Les exploits légendaires du guerrier Ragnar Lothbrok, explorateur des terres lointaines.",
  },
];

export const EpicSection = () => {
  return (
    <section className="px-6 py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto">
        

        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-title border-l-8 border-red-primary pl-6 mb-6">
            Les Univers qui dépassent la fiction
          </h2>
          <p className="text-text-main text-lg max-w-2xl leading-relaxed">
            Certains univers ne sont pas de simples histoires. Ils deviennent des
            mondes à part entière, avec leurs propres cultures, conflits et légendes.
          </p>
        </div>


        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24 bg-bg-card/50 p-8 rounded-2xl border border-color-accent/20">
          
          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-2xl">
            <img
              src="https://beam-images.warnermediacdn.com/2024-05/hlhui4espi.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com"
              alt="Univers épiques"
              className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-110"
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
            <blockquote className="border-l-2 border-text-main/30 pl-4 py-2">
              <p className="text-text-main italic text-lg">
                "Not today."
              </p>
              <footer className="text-red-primary font-semibold mt-1">— Arya Stark</footer>
            </blockquote>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {epicUniverses.map((universe) => (
            <MovieCard key={universe.id} {...universe} />
          ))}
        </div>

      </div>
    </section>
  );
};
