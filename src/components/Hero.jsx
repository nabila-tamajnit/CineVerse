export const Hero = () => {
  return (
    <section
      className="relative h-[95vh] flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-bg-main" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tighter"> 
          <span className="text-white">Cine</span>
          <span className="text-red-primary">Verse</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-title font-medium mb-4">
          L'odyssée des récits qui marquent l'histoire
        </p>
        
        <p className="text-text-main max-w-lg mx-auto mb-10 text-lg leading-relaxed">
          Explore des mondes légendaires, des batailles épiques et des sagas 
          inoubliables qui font vibrer le cinéma mondial.
        </p>

        <button className="bg-red-primary hover:bg-red-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-color-primary/20 cursor-pointer">
          Commencer l'exploration
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-color-primary to-transparent" />
      </div>
    </section>
  );
};
