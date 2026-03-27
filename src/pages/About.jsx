import { motion } from "framer-motion";

export const About = () => {
    return (
        <div className="bg-bg-main min-h-screen">

            {/* ========== HERO ========== */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/133070/pexels-photo-133070.jpeg?_gl=1*1u0hqo2*_ga*MTI2MzYyNzgxMi4xNzc0NDg1MjQ0*_ga_8JE65Q40S6*czE3NzQ2NDg2MTMkbzMkZzEkdDE3NzQ2NDk0NTgkajU5JGwwJGgw')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/20 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative z-10 text-center px-6"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-text-title tracking-tighter mb-4">
                        L'Âme de <span className="text-red-primary">CineVerse</span>
                    </h1>
                    <p className="text-text-main text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Bienvenue dans l'univers où chaque pixel raconte une histoire.
                    </p>
                </motion.div>
            </section>

            {/* ========== CONTENU PRINCIPAL ========== */}
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">

                {/* ----- SECTION 1 : La Passion ----- */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-text-title mb-6 border-l-4 border-red-primary pl-4 uppercase tracking-widest text-sm">
                            Genèse du projet
                        </h2>
                        <p className="text-text-main text-lg leading-relaxed">
                            CineVerse est né d’une passion profonde pour les films et les séries.
                            Ce projet met en lumière des œuvres qui ont marqué l’histoire du divertissement
                            et influencé des millions de spectateurs à travers le monde.
                        </p>
                    </motion.div>
                    <div className="rounded-2xl overflow-hidden border border-red-border/20 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Passion Cinéma"
                            className="w-full h-80 object-cover"
                        />
                    </div>
                </section>

                {/* ----- SECTION 2 : Immersion ----- */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="md:order-2">
                        <h2 className="text-3xl font-bold text-text-title mb-6 border-l-4 border-red-primary pl-4 uppercase tracking-widest text-sm">
                            Deux formats, une passion
                        </h2>
                        <div className="space-y-6 text-text-main text-lg leading-relaxed font-light">
                            <p>
                                Les films offrent une immersion intense en quelques heures, tandis que les séries
                                construisent des mondes sur plusieurs saisons.
                            </p>
                            <p>
                                Du réalisme intense des drames aux univers fantastiques remplis de dragons,
                                chaque histoire mérite d’être explorée. Ensemble, ils façonnent notre imaginaire collectif.
                            </p>
                        </div>
                    </div>
                    <div className="md:order-1 rounded-2xl overflow-hidden border border-red-border/20 shadow-2xl">
                        <img
                            src="https://images.pexels.com/photos/14756354/pexels-photo-14756354.jpeg?_gl=1*f6ylk2*_ga*MTI2MzYyNzgxMi4xNzc0NDg1MjQ0*_ga_8JE65Q40S6*czE3NzQ2NDg2MTMkbzMkZzEkdDE3NzQ2NDg4NDgkajI3JGwwJGgw"
                            alt="Séries Immersives"
                            className="w-full h-80 object-cover"
                        />
                    </div>
                </section>

                {/* ----- SECTION 3 : Partage & Confort ----- */}
                <section className="py-20 border-y border-red-border/10 bg-bg-card/20 -mx-6 px-6">
                    <div className="max-w-5xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-title mb-4 italic">
                            Plus qu'un écran, une <span className="text-red-primary">émotion</span>
                        </h2>
                        <p className="text-text-main">Chaque œuvre se vit différemment selon l'instant.</p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Carte Cinéma */}
                        <div className="group relative overflow-hidden rounded-3xl bg-bg-main p-8 border border-red-border/20">
                            <div className="mb-6 text-red-primary group-hover:scale-110 transition-transform">
                                <span className="text-4xl">🍿</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-title mb-4">Le Partage du Grand Écran</h3>
                            <p className="text-text-main leading-relaxed">
                                Rien ne remplace l'énergie d'une salle obscure. Le rire collectif, le souffle coupé à l'unisson
                                et l'immensité de l'image qui nous transporte loin du quotidien avec ceux qu'on aime.
                            </p>
                        </div>

                        {/* Carte Maison */}
                        <div className="group relative overflow-hidden rounded-3xl bg-bg-main p-8 border border-red-border/20">
                            <div className="mb-6 text-red-primary group-hover:scale-110 transition-transform">
                                <span className="text-4xl">🛋️</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-title mb-4">Le Sanctuaire du Salon</h3>
                            <p className="text-text-main leading-relaxed">
                                Le confort absolu d'un canapé, la chaleur d'un plaid et la liberté de suspendre le temps.
                                Le streaming nous permet de savourer chaque détail, à notre rythme, seul ou en toute intimité.
                            </p>
                        </div>
                    </div>
                </section>


                {/* ----- SECTION 4 : L'expérience CineVerse ----- */}
                <section className="pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "SÉLECTION", desc: "Le meilleur du catalogue mondial à portée de clic." },
                            { title: "IMMERSION", desc: "Une expérience visuelle pensée pour les passionnés." },
                            { title: "ÉMOTION", desc: "Redécouvrir les classiques et les pépites de demain." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="p-10 bg-bg-card/40 rounded-3xl border border-red-border/10 text-center hover:border-red-primary/40 transition-colors group"
                            >
                                <h3 className="text-red-primary font-bold mb-4 tracking-widest group-hover:scale-110 transition-transform italic">
                                    {item.title}
                                </h3>
                                <p className="text-text-main text-sm font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ----- MOT DE LA FIN ----- */}
                <div className="text-center pt-20 border-t border-red-border/10">
                    <p className="text-2xl md:text-3xl font-extralight text-text-title italic max-w-3xl mx-auto leading-snug">
                        "Derrière chaque écran, il y a une émotion qui n'attend qu'à être vécue."
                    </p>
                    <div className="mt-8 flex justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-primary" />
                        <div className="w-2 h-2 rounded-full bg-red-primary/40" />
                        <div className="w-2 h-2 rounded-full bg-red-primary/10" />
                    </div>
                </div>

            </div>
        </div>
    );
};
