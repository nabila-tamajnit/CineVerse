import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Recherche", path: "/search" },
    { name: "À propos", path: "/about" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-bg-main/80 backdrop-blur-md border-b border-red-border/30 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* ----- LOGO ----- */}
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-text-title">Cine</span>
          <span className="text-red-primary">Verse</span>
        </Link>

        {/* ----- DESKTOP MENU ----- */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-text-main hover:text-red-hover transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ----- BURGER BUTTON ----- */}
        <button 
          className="md:hidden text-text-title p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ----- MOBILE MENU ----- */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-main border-b border-red-border/30 flex flex-col p-6 gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-text-title text-lg font-medium hover:text-red-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
