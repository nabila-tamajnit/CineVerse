import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-bg-main border-t border-red-border/30 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* ----- LOGO & DESCRIPTION ----- */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              <span className="text-text-title">Cine</span>
              <span className="text-red-primary">Verse</span>
            </Link>
            <p className="text-text-main text-sm leading-relaxed max-w-xs">
              Explorez les univers qui marquent l'histoire du cinéma. Une expérience immersive pour les passionnés du 7ème art.
            </p>
          </div>

          {/* ----- LIENS ----- */}
          <div className="space-y-4">
            <h4 className="text-text-title font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-2 text-text-main text-sm">
              <li><Link to="/" className="hover:text-red-primary transition-colors">Accueil</Link></li>
              <li><Link to="/search" className="hover:text-red-primary transition-colors">Recherche</Link></li>
              <li><Link to="/about" className="hover:text-red-primary transition-colors">À propos</Link></li>
            </ul>
          </div>

          {/* ----- MENTIONS TMDB ----- */}
          <div className="space-y-4">
            <h4 className="text-text-title font-bold uppercase tracking-widest text-xs">Source des données</h4>
            <div className="flex flex-col gap-4">
              <img 
                src="/assets/tmdb-logo.svg" 
                alt="TMDB Logo" 
                className="w-18"
              />
              <p className="text-[10px] text-text-main/40 leading-tight">
                This product uses the TMDB API but is not endorsed or certified by TMDB.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-border/5 pt-8 text-center">
          <p className="text-text-main/30 text-xs">
            © {new Date().getFullYear()} CineVerse — Réalisé avec React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
