import { motion } from "framer-motion";

export const LifeStyleSection = () => {
  const moods = [
    { emoji: "🍿", title: "Soirée Pop-corn", desc: "Entre amis, le rire est plus fort." },
    { emoji: "🛋️", title: "Instant Plaid", desc: "Le confort absolu pour vos marathons." },
    { emoji: "🎬", title: "Culte & Vintage", desc: "Redécouvrez les classiques du cinéma." }
  ];

  return (
    <section className="py-24 px-6 bg-bg-main bg-gradient-to-b from-bg-main to-bg-card/30">
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* ----- Texte ----- */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-text-title leading-tight">
              Le cinéma ne se regarde pas, <span className="text-red-primary italic"> il se vit.</span>
            </h2>
            
            <p className="text-text-main text-lg leading-relaxed">
              Que ce soit le frisson d'une salle obscure entre amis ou la douceur d'un dimanche sous un plaid, 
              CineVerse vous accompagne dans chaque moment de partage. 
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {moods.map((mood, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-red-border/20">
                  <span className="text-3xl">{mood.emoji}</span>
                  <div>
                    <h4 className="text-text-title font-bold">{mood.title}</h4>
                    <p className="text-text-main text-sm">{mood.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ----- Image ----- */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-red-primary/10 blur-2xl rounded-full group-hover:bg-red-primary/20 transition-all" />
            <img 
              src="https://images.pexels.com/photos/7991259/pexels-photo-7991259.jpeg?_gl=1*1diw3y7*_ga*MTI2MzYyNzgxMi4xNzc0NDg1MjQ0*_ga_8JE65Q40S6*czE3NzQ2NTEzMzAkbzQkZzEkdDE3NzQ2NTE1NDgkajU5JGwwJGgw" 
              alt="Partage entre amis" 
              className="relative rounded-3xl shadow-2xl border border-red-border/20 object-cover h-[500px] w-full"
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
